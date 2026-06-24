require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// ── Serve static frontend files ──────────────────────────────────────────────
app.use(express.static(path.join(__dirname)));

// ── R2 Client ────────────────────────────────────────────────────────────────
const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.R2_BUCKET;

// ── Multer (memory storage, 50 MB limit) ─────────────────────────────────────
const ALLOWED_TYPES = [
  'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml',
  'application/pdf',
  'video/mp4', 'video/webm',
  'text/plain', 'application/json',
];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
  fileFilter(req, file, cb) {
    if (ALLOWED_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Desteklenmeyen dosya tipi: ${file.mimetype}`));
    }
  },
});

// ── POST /api/upload ─────────────────────────────────────────────────────────
app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Dosya seçilmedi.' });
  }

  const ext = path.extname(req.file.originalname);
  const uid = crypto.randomBytes(8).toString('hex');
  const key = `uploads/${uid}${ext}`;

  try {
    await r2.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
      Metadata: {
        originalName: Buffer.from(req.file.originalname).toString('base64'),
      },
    }));

    res.json({
      success: true,
      key,
      originalName: req.file.originalname,
      size: req.file.size,
      mimeType: req.file.mimetype,
    });
  } catch (err) {
    console.error('R2 upload error:', err);
    res.status(500).json({ error: 'Yükleme başarısız.', detail: err.message });
  }
});

// ── DELETE /api/upload/:key ───────────────────────────────────────────────────
app.delete('/api/upload/:key(*)', async (req, res) => {
  const key = req.params.key;
  try {
    await r2.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
    res.json({ success: true, key });
  } catch (err) {
    console.error('R2 delete error:', err);
    res.status(500).json({ error: 'Silme başarısız.', detail: err.message });
  }
});

// ── Multer hata yakalayıcı ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'Dosya 50 MB sınırını aşıyor.' });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Upload : POST http://localhost:${PORT}/api/upload`);
});
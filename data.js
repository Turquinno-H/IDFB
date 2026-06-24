export const PLAYERS = [
  {
    id: 'arda', type: 'player',
    name: 'Arda Güler', nickname: 'El Joven', nicknameEn: 'The Wonder Kid',
    sub: 'Real Madrid · #11', nat: 'Türkiye', role: 'Orta Saha / Sol Kanat', league: 'La Liga',
    icon: 'ti-wand',
    bannerColor: '#E30A17', avatarBg: '#E30A17', avatarText: '#ffffff',
    fanScore: 9.2, overall: 87, marketValue: '€85M',
    stats: [{ l: 'Maç', v: 47 }, { l: 'Gol', v: 12 }, { l: 'Asist', v: 9 }, { l: 'Puan Ort.', v: '8.3' }, { l: 'Yaş', v: 19 }],
    badges: [{ t: 'badge-type', l: 'Oyuncu' }, { t: 'badge-nat', l: '🇹🇷 Türkiye' }, { t: 'badge-role', l: 'Orta Saha' }],
    perfs: [
      { label: 'Teknik', val: 94, color: '#E30A17' },
      { label: 'Vizyon', val: 91, color: '#1D9E75' },
      { label: 'Şut', val: 88, color: '#378ADD' },
      { label: 'Pas', val: 86, color: '#1D9E75' },
      { label: 'Hız', val: 81, color: '#c9a84c' },
      { label: 'Fizik', val: 72, color: '#888780' }
    ],
    trophies: [
      { icon: 'ti-trophy', title: 'La Liga', club: 'Real Madrid', yr: '2024–25' },
      { icon: 'ti-medal', title: 'Süper Kupa', club: 'Real Madrid', yr: '2024' },
      { icon: 'ti-star', title: 'EURO 2024 Maç Adamı', club: 'Türkiye MT', yr: '2024' },
      { icon: 'ti-award', title: 'Golden Boy Aday', club: 'UEFA', yr: '2024' }
    ],
    timeline: [
      { yr: '2014', title: 'Fenerbahçe Altyapısı', desc: '8 yaşında Fenerbahçe\'nin gözüne girdi.', tag: 'İlk Adım' },
      { yr: '2021', title: 'İlk Profesyonel Sözleşme', desc: '15 yaşında — Türkiye\'nin en genç profesyoneli.', tag: 'Rekor' },
      { yr: '2022', title: 'Süper Lig\'deki İlk Gol', desc: 'Galatasaray\'a karşı serbest vuruştan tarihi gol.', tag: 'Tarihi Gol' },
      { yr: '2023', title: 'Real Madrid Transferi', desc: '20M € bonservis. Bernabéu kazandı.', tag: 'Kariyer Sıçraması' },
      { yr: '2024', title: 'EURO 2024 Fenomeni', desc: 'Gürcistan ve Çekya\'ya attığı gollerle dünya sahnesine çıktı.', tag: 'Dünya Sahnesi' },
      { yr: '2025', title: 'UCL İlk Golü', desc: 'Man City\'ye karşı. Ancelotti\'nin tam güveni kazanıldı.', tag: 'Şampiyonlar Ligi' }
    ],
    chemistry: [
      { initials: 'VJ', name: 'Vinicius Jr.', pos: 'Sol Kanat', pct: 95, bg: '#E6F1FB', tc: '#0C447C' },
      { initials: 'HC', name: 'Hakan Çalhanoğlu', pos: 'Orta Saha (MT)', pct: 91, bg: '#FAEEDA', tc: '#633806' },
      { initials: 'JB', name: 'Jude Bellingham', pos: 'Orta Saha', pct: 88, bg: '#FBEAF0', tc: '#72243E' },
      { initials: 'KM', name: 'Kylian Mbappé', pos: 'Forvet', pct: 82, bg: '#E1F5EE', tc: '#085041' }
    ],
    aiStrong: 'Dar alanlarda ani dönüşler ve yön değiştirme hızı eşsiz. Sol ayak şutu uzak mesafeden isabetli. Oyun okuma yeteneği yaşına göre olağanüstü.',
    aiStrong_chips: ['Dar alan dehası', 'Sol ayak', 'Oyun okuma', 'Baskı altında sakin'],
    aiWeak: 'Fiziksel olarak güçlü rakiplere karşı top kaybı artıyor. Sağ ayak kullanımı kısıtlı. Defansif katkı düşük.',
    aiWeak_chips: ['Fizik', 'Sağ ayak', 'Pressing'],
    aiFuture: 'Mevcut hızda 22–23 yaşında Ballon d\'Or adayı. 2 sezon içinde Avrupa\'nın en değerli 5 oyuncusundan biri olabilir.',
    milestones: [
      { icon: 'ti-file-certificate', bg: '#FAEEDA', ic: '#633806', title: 'İlk profesyonel sözleşme (2021)', desc: 'Türk futbolunun en genç sözleşmeli oyuncusu.' },
      { icon: 'ti-ball-football', bg: '#FCEBEB', ic: '#791F1F', title: 'Süper Lig\'deki ilk gol (2022)', desc: 'Galatasaray\'a karşı serbest vuruştan.' },
      { icon: 'ti-plane', bg: '#E6F1FB', ic: '#0C447C', title: 'Real Madrid transferi (2023)', desc: 'Türk futbolunun en prestijli transferi.' },
      { icon: 'ti-crown', bg: '#EEEDFE', ic: '#3C3489', title: 'UCL ilk golü (2025)', desc: 'Manchester City\'ye karşı.' }
    ]
  },
  {
    id: 'hakan', type: 'player',
    name: 'Hakan Çalhanoğlu', nickname: 'Il Regista', nicknameEn: 'The Maestro',
    sub: 'Inter Milan · #20', nat: 'Türkiye', role: 'Defansif Orta Saha', league: 'Serie A',
    icon: 'ti-music',
    bannerColor: '#E30A17', avatarBg: '#ffffff', avatarText: '#E30A17',
    fanScore: 9.0, overall: 88, marketValue: '€50M',
    stats: [{ l: 'Maç', v: 312 }, { l: 'Gol', v: 68 }, { l: 'Asist', v: 97 }, { l: 'Puan Ort.', v: '8.1' }, { l: 'Yaş', v: 31 }],
    badges: [{ t: 'badge-type', l: 'Oyuncu' }, { t: 'badge-nat', l: '🇹🇷 Türkiye' }, { t: 'badge-role', l: 'Defansif OS' }],
    perfs: [
      { label: 'Pas', val: 96, color: '#185FA5' },
      { label: 'Vizyon', val: 93, color: '#1D9E75' },
      { label: 'Top Kesme', val: 88, color: '#c9a84c' },
      { label: 'Şut', val: 82, color: '#378ADD' },
      { label: 'Liderlik', val: 91, color: '#c9a84c' },
      { label: 'Hız', val: 74, color: '#888780' }
    ],
    trophies: [
      { icon: 'ti-trophy', title: 'Serie A (Scudetto)', club: 'Inter Milan', yr: '2023–24' },
      { icon: 'ti-medal', title: 'Coppa Italia', club: 'Inter Milan', yr: '2023' },
      { icon: 'ti-star', title: 'Serie A Sezonun Oyuncusu', club: 'Lega Serie A', yr: '2024' },
      { icon: 'ti-award', title: 'EURO 2024 Kaptanı', club: 'Türkiye MT', yr: '2024' }
    ],
    timeline: [
      { yr: '2010', title: 'Trabzonspor Altyapısı', desc: 'Karadeniz\'den çıkan mücadeleci oyun kurucu.', tag: 'Başlangıç' },
      { yr: '2014', title: 'Bayer Leverkusen', desc: 'Bundesliga\'da serbest vuruş uzmanı olarak öne çıktı.', tag: 'Almanya' },
      { yr: '2017', title: 'AC Milan', desc: 'Serie A\'da 5 sezon ekibin motoru.', tag: 'İtalya' },
      { yr: '2021', title: 'Inter Milan', desc: 'Defansif regista rolüne mükemmel uyum.', tag: 'Dönüşüm' },
      { yr: '2023', title: 'Scudetto & Kaptanlık', desc: 'Inter\'i şampiyonluğa taşıdı. Serie A\'nın en iyisi.', tag: 'Şampiyon' }
    ],
    chemistry: [
      { initials: 'LM', name: 'Lautaro Martínez', pos: 'Forvet', pct: 94, bg: '#E6F1FB', tc: '#0C447C' },
      { initials: 'NB', name: 'Nicolò Barella', pos: 'Orta Saha', pct: 90, bg: '#FAEEDA', tc: '#633806' },
      { initials: 'MT', name: 'Marcus Thuram', pos: 'Forvet', pct: 85, bg: '#E1F5EE', tc: '#085041' },
      { initials: 'FD', name: 'Federico Dimarco', pos: 'Sol Bek', pct: 82, bg: '#EEEDFE', tc: '#3C3489' }
    ],
    aiStrong: 'Serie A\'nın en iyi regista\'larından biri. Pas isabeti %94 ile zirvede. Serbest vuruş ustalığı kariyeri boyunca değişmedi.',
    aiStrong_chips: ['Regista', 'Pas isabeti', 'Serbest vuruş', 'Liderlik'],
    aiWeak: 'Yüksek tempolu pressing oyununda fiziksel limitler devreye giriyor. 31 yaşında hız düşüyor.',
    aiWeak_chips: ['Hız', 'Pressing yoğunluğu'],
    aiFuture: '1–2 sezon daha Serie A\'da. Ardından MLS veya Süper Lig\'e dönüş ihtimali. Teknik direktörlük entelektüel altyapısı mevcut.',
    milestones: [
      { icon: 'ti-trophy', bg: '#FAEEDA', ic: '#633806', title: 'Inter Scudetto (2023)', desc: 'Şampiyonlukta anahtar figür. Serie A\'nın en iyisi.' },
      { icon: 'ti-arrow-shuffle', bg: '#E6F1FB', ic: '#0C447C', title: 'Pozisyon dönüşümü (2021)', desc: 'Klasik orta sahadan regista\'ya.' },
      { icon: 'ti-flag', bg: '#E1F5EE', ic: '#085041', title: 'EURO 2024 kaptanlığı', desc: 'Türkiye\'yi çeyrek finale taşıdı.' }
    ]
  }
];

export const COACHES = [
  {
    id: 'mourinho', type: 'coach',
    name: 'José Mourinho', nickname: 'The Special One', nicknameEn: 'The Special One',
    sub: 'S.L. Benfica · Teknik Direktör', nat: 'Portekiz', role: 'Teknik Direktör', league: 'Liga Portugal',
    icon: 'ti-crown',
    bannerColor: '#cc0000', avatarBg: '#cc0000', avatarText: '#ffffff',
    fanScore: 8.9, overall: 94, marketValue: '—',
    stats: [{ l: 'Maç', v: 1108 }, { l: 'Galibiyet', v: 684 }, { l: 'Kupa', v: 26 }, { l: 'Galibiyet%', v: '62%' }, { l: 'Yaş', v: 62 }],
    badges: [{ t: 'badge-type', l: 'Teknik Direktör' }, { t: 'badge-nat', l: '🇵🇹 Portekiz' }, { t: 'badge-role', l: 'Savunma Odaklı' }],
    perfs: [
      { label: 'Taktik', val: 97, color: '#cc0000' },
      { label: 'Motivasyon', val: 96, color: '#c9a84c' },
      { label: 'Büyük Maç', val: 98, color: '#1D9E75' },
      { label: 'Kadro Yönt.', val: 88, color: '#378ADD' },
      { label: 'Basın İlt.', val: 91, color: '#c9a84c' },
      { label: 'Oyuncu Gel.', val: 72, color: '#888780' }
    ],
    trophies: [
      { icon: 'ti-trophy', title: 'Şampiyonlar Ligi x2', club: 'Porto & Inter Milan', yr: '2004, 2010' },
      { icon: 'ti-medal', title: 'Premier Lig x3', club: 'Chelsea & Man United', yr: '2005, 2006, 2013' },
      { icon: 'ti-award', title: 'Serie A x2', club: 'Inter Milan', yr: '2009, 2010' },
      { icon: 'ti-star', title: 'Conference League', club: 'AS Roma', yr: '2022' },
      { icon: 'ti-flag', title: 'Portekiz Ligi', club: 'FC Porto', yr: '2003, 2004' }
    ],
    timeline: [
      { yr: '2002', title: 'FC Porto – UCL Efsanesi', desc: 'Porto\'yu Avrupa zirvesine taşıdı.', tag: 'İlk Mucize' },
      { yr: '2004', title: 'Chelsea – "The Special One"', desc: 'Stamford Bridge\'de tarihi basın toplantısı. İki lig şampiyonluğu.', tag: 'The Special One' },
      { yr: '2010', title: 'Inter Milan – Treble', desc: 'Tarihin en büyük treble\'ını yaptı.', tag: 'Tarihi Treble' },
      { yr: '2013', title: 'Real Madrid', desc: 'La Liga rekoru: 100 puan.', tag: 'Rekortmen' },
      { yr: '2022', title: 'AS Roma – Conference League', desc: 'Roma\'yı Avrupa kupasına kavuşturdu.', tag: 'Roma' },
      { yr: '2025', title: 'S.L. Benfica', desc: 'Evine döndü. Lizbon\'da şampiyonluk peşinde.', tag: 'Eve Dönüş' }
    ],
    chemistry: [
      { initials: 'AO', name: 'Orkun Kökçü', pos: 'Orta Saha', pct: 88, bg: '#FAEEDA', tc: '#633806' },
      { initials: 'VP', name: 'Vangelis Pavlidis', pos: 'Forvet', pct: 85, bg: '#E6F1FB', tc: '#0C447C' },
      { initials: 'NO', name: 'Nicolás Otamendi', pos: 'Stoper', pct: 82, bg: '#E1F5EE', tc: '#085041' },
      { initials: 'FA', name: 'Fredrik Aursnes', pos: 'Orta Saha', pct: 79, bg: '#EEEDFE', tc: '#3C3489' }
    ],
    formations: [{ name: '4-2-3-1', sub: 'Birincil' }, { name: '4-4-2', sub: 'Kontra atak' }, { name: '5-3-2', sub: 'Savunma bloku' }],
    aiStrong: 'Büyük maçlarda taktiksel üstünlük kurma kabiliyeti 25 yıldır eşsiz. Psikolojik baskı yönetimi hâlâ zirvede.',
    aiStrong_chips: ['Büyük maç', 'Psikoloji', 'Savunma', 'Karizmatik liderlik'],
    aiWeak: 'Uzun vadeli kadro geliştirme tutarsız. Yönetimle gergin ilişkiler bir süre sonra patlıyor.',
    aiWeak_chips: ['Genç oyuncu', 'Yönetim ilişkisi'],
    aiFuture: 'Benfica ile Portekiz şampiyonluğu ve UCL yolculuğu gündemde. Kariyerini doğduğu ülkede bir kupa ile taçlandırmak istiyor.',
    milestones: [
      { icon: 'ti-trophy', bg: '#FAEEDA', ic: '#633806', title: 'Inter treble\'ı (2010)', desc: 'UCL, Serie A ve Coppa Italia. Tarihte nadiren tekrar edilen başarı.' },
      { icon: 'ti-microphone', bg: '#E6F1FB', ic: '#0C447C', title: '"The Special One" (2004)', desc: 'Modern futbolun en ikonik basın toplantısı.' },
      { icon: 'ti-flag', bg: '#FCEBEB', ic: '#791F1F', title: 'Benfica dönemi (2025)', desc: 'Eve döndü. Portekiz\'de şampiyonluk peşinde.' }
    ]
  },
  {
    id: 'ancelotti', type: 'coach',
    name: 'Carlo Ancelotti', nickname: 'Il Signore', nicknameEn: 'The Gentleman',
    sub: 'Brezilya Milli Takımı · Teknik Direktör', nat: 'İtalya', role: 'Teknik Direktör', league: 'La Liga',
    icon: 'ti-diamond',
    bannerColor: '#009c3b', avatarBg: '#009c3b', avatarText: '#ffdf00',
    fanScore: 9.5, overall: 97, marketValue: '—',
    stats: [{ l: 'Maç', v: 1152 }, { l: 'Galibiyet', v: 706 }, { l: 'UCL', v: 5 }, { l: 'Galibiyet%', v: '61%' }, { l: 'Yaş', v: 65 }],
    badges: [{ t: 'badge-type', l: 'Teknik Direktör' }, { t: 'badge-nat', l: '🇮🇹 İtalya' }, { t: 'badge-role', l: 'Oyuncu Odaklı' }],
    perfs: [
      { label: 'Kadro Yönt.', val: 99, color: '#009c3b' },
      { label: 'UCL Deneyimi', val: 99, color: '#1D9E75' },
      { label: 'Oyuncu Gel.', val: 95, color: '#185FA5' },
      { label: 'Uyum', val: 96, color: '#c9a84c' },
      { label: 'Taktik', val: 90, color: '#993556' },
      { label: 'Motivasyon', val: 93, color: '#c9a84c' }
    ],
    trophies: [
      { icon: 'ti-trophy', title: 'Şampiyonlar Ligi x5', club: 'Milan & Real Madrid', yr: '2003,14,22,24,25' },
      { icon: 'ti-medal', title: 'La Liga x3', club: 'Real Madrid', yr: '2022, 2024, 2025' },
      { icon: 'ti-award', title: 'Serie A', club: 'AC Milan', yr: '2004' },
      { icon: 'ti-crown', title: 'En Çok UCL Kazanan Teknik Direktör', club: 'Tarihte 1. sıra', yr: '2024' },
      { icon: 'ti-star', title: 'Premier Lig', club: 'Chelsea', yr: '2010' }
    ],
    timeline: [
      { yr: '2001', title: 'Juventus & AC Milan', desc: 'Serie A\'da 8 yıl efsane yarattı.', tag: 'İtalya' },
      { yr: '2005', title: 'İstanbul Gecesi', desc: 'Tarihin en büyük geri dönüşünü yaşadı, kaybeden tarafta.', tag: 'Tarihi Gece' },
      { yr: '2014', title: 'Real Madrid – La Decima', desc: '12 yıllık hasretin ardından 10. UCL.', tag: 'La Decima' },
      { yr: '2021', title: 'Efsane Dönüş', desc: '"Bitti" denirken Bernabéu\'ya döndü.', tag: 'Dönüş' },
      { yr: '2024', title: 'UCL 5. Kez', desc: 'Tarihte en çok UCL kazanan teknik direktör.', tag: 'Rekortmen' },
      { yr: '2025', title: 'Brezilya Milli Takımı', desc: 'Seleção\'nun başına geçti. Dünya Kupası hedefi.', tag: 'Seleção' }
    ],
    chemistry: [
      { initials: 'VM', name: 'Vinicius Jr.', pos: 'Kanat', pct: 97, bg: '#FAEEDA', tc: '#633806' },
      { initials: 'RO', name: 'Rodrygo', pos: 'Kanat', pct: 93, bg: '#E6F1FB', tc: '#0C447C' },
      { initials: 'EN', name: 'Endrick', pos: 'Forvet', pct: 89, bg: '#E1F5EE', tc: '#085041' },
      { initials: 'RV', name: 'Raphaël Veiga', pos: 'Orta Saha', pct: 84, bg: '#EEEDFE', tc: '#3C3489' }
    ],
    formations: [{ name: '4-3-3', sub: 'Standart' }, { name: '4-2-3-1', sub: 'Büyük maç' }, { name: '4-4-2', sub: 'Savunma' }],
    aiStrong: 'Yıldız yönetimindeki empati eşsiz. UCL deneyimi 25 yılda birikmiş. Oyuncuların en iyi versiyonunu çıkarıyor.',
    aiStrong_chips: ['Yıldız yönetimi', 'UCL', 'Oyuncu empati', 'Adaptasyon'],
    aiWeak: 'Pressing odaklı takımlara karşı savunmada sorunlar. Uzun vadeli taktik esnekliği tartışma konusu.',
    aiWeak_chips: ['Pressing savunması', 'Taktik esneklik'],
    aiFuture: 'Brezilya Dünya Kupası 2026 ile kariyerini taçlandırma ihtimali yüksek. Futbol tarihinin en büyük koçu unvanını pekiştirebilir.',
    milestones: [
      { icon: 'ti-trophy', bg: '#FAEEDA', ic: '#633806', title: 'La Decima (2014)', desc: 'Real Madrid\'e 12 yıllık hasreti bitirdi.' },
      { icon: 'ti-crown', bg: '#E1F5EE', ic: '#085041', title: '5. UCL (2025)', desc: 'Tarihte ilk kez 5 kez Şampiyonlar Ligi kazanan teknik direktör.' },
      { icon: 'ti-flag', bg: '#E6F1FB', ic: '#0C447C', title: 'Seleção görevi (2025)', desc: 'Dünya Kupası 2026 için Brezilya\'nın başında.' }
    ]
  }
];

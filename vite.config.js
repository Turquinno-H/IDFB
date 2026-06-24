import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html',
        oyuncular: './oyuncular.html',
        coaches: './teknik-direktorler.html'
      }
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom plugin to duplicate index.html as 404.html for GitHub Pages SPA support
function copy404Plugin() {
  return {
    name: 'copy-404-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')
      const notFoundPath = path.join(distDir, '404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/DocesDoGuga/',
  server: {
    port: 3000,
    open: false
  }
})

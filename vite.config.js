import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom plugin to duplicate index.html as 404.html and mirror dist to docs for GitHub Pages
function githubPagesHelperPlugin() {
  return {
    name: 'github-pages-helper',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const docsDir = path.resolve(__dirname, 'docs')
      const indexPath = path.join(distDir, 'index.html')
      const notFoundPath = path.join(distDir, '404.html')
      const noJekyllPath = path.join(distDir, '.nojekyll')

      // Ensure 404.html exists in dist
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
      }
      // Ensure .nojekyll exists in dist
      if (!fs.existsSync(noJekyllPath)) {
        fs.writeFileSync(noJekyllPath, '# Disable Jekyll\n')
      }

      // Copy dist to docs for repos using "main" branch with "/docs" folder
      if (fs.existsSync(distDir)) {
        if (fs.existsSync(docsDir)) {
          fs.rmSync(docsDir, { recursive: true, force: true })
        }
        fs.cpSync(distDir, docsDir, { recursive: true })
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesHelperPlugin()],
  base: '/DocesDoGuga/',
  server: {
    port: 3000,
    open: false
  }
})

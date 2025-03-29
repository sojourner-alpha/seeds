import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/seeds/', // Set base path for GitHub Pages deployment
  // We'll add the base path back before deploying to GitHub Pages
  // base: '/elmseeds/',
})

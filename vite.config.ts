import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // We'll add the base path back before deploying to GitHub Pages
  // base: '/elmseeds/',
})

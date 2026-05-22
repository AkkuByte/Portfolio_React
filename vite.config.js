import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
  ],
  // Don't forget to keep your GitHub Pages base URL here!
  base: '/Portfolio_React/', 
})
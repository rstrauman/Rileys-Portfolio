import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  base: '/Rileys-Portfolio/',
  plugins: [
    react(),
    tailwind(),
  ],
  server: {
    port: 3000,
  },
})



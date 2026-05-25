import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- DODAJ TĘ LINIJKĘ

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- DODAJ TĘ WTYCZKĘ TUTAJ
  ],
})
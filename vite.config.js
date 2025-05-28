import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/Tour-maker/",
  plugins: [react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', 'cursive'], // you can name it anything
      },
    },
  },
})

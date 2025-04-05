import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})

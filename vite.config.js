import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    hmr: {
      overlay: true, // এরর থাকলে স্ক্রিনে দেখাবে কিন্তু রিলোড করবে না
    }
  }
})
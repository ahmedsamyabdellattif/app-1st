import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // أو '/' لو المشروع في الدومين الرئيسي
  plugins: [react()],
})

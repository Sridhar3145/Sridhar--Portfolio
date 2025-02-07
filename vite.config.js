import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
    optimizeDeps: {
    include: ["@react-spring/web"]}
})

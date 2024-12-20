import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3010',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  define: {
    'process.env': {
      API_URL: JSON.stringify('http://localhost:3010/api/v1')
    }
  }
})

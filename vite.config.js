import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external access
    port: 5174, // your port
    allowedHosts: [
      'ultrasonically-multivariate-pearl.ngrok-free.dev', // add your ngrok host here
    ]
  }
})
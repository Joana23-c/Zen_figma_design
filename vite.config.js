import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // allows external access
    port: 5174, // your port
    allowedHosts: [
      'ultrasonically-multivariate-pearl.ngrok-free.dev', // add your ngrok host here
    ]
  }
})
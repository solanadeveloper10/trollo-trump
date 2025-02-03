import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes it accessible via local network
    port: 5173, // Optional: specify a port
    open: true, // Automatically opens the browser
  },
})

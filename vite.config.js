import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'dynamic-events-frontend', // ⚠️ Cambia esto por el nombre de TU repositorio
  server: {
    port: 5173
  }
})

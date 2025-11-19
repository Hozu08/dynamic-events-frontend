// Configuración de la API
const API_CONFIG = {
  // URL del backend en producción (Vercel/Render)
  PRODUCTION: 'https://dynamic-events-backend.vercel.app/',
  
  // URL del backend en desarrollo
  DEVELOPMENT: 'http://localhost:3000'
};

// Detectar automáticamente el entorno
const isProduction = window.location.hostname !== 'localhost';

export const API_URL = isProduction ? API_CONFIG.PRODUCTION : API_CONFIG.DEVELOPMENT;

// Exportar endpoints
export const ENDPOINTS = {
  CHAT: `${API_URL}/api/chat`,
  TEST: `${API_URL}/test`
};
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const VITE_PYTHON_BACKEND_BASE_URL = isLocal
  ? 'http://localhost:8000'
  : 'https://downloadguru-backend-fastapi.onrender.com';

export const VITE_NODE_BACKEND_BASE_URL = isLocal
  ? 'http://localhost:3000'
  : 'https://downloadguru-backend-nodejs.onrender.com';

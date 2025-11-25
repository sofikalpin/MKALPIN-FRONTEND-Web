// API Configuration
// En desarrollo: usa localhost
// En producción: usa la variable de entorno REACT_APP_API_URL

const API_BASE_URL = process.env.REACT_APP_API_URL
  ? `${process.env.REACT_APP_API_URL}/API`
  : 'https://mkalpin-backend-api.onrender.com/API';

const API_STATIC_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : 'https://mkalpin-backend-api.onrender.com';

export { API_BASE_URL, API_STATIC_URL }
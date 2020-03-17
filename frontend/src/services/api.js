import axios from 'axios';

const backend = process.env.BACKEND_ADDRESS || 'localhost:3001';

const api = axios.create({ baseURL: `http://${backend}/api` });

export default api;

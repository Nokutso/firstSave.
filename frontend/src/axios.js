import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // adjust to your API path
  withCredentials: true, // optional, for cookies
});

export default api;
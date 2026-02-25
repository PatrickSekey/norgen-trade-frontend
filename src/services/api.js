import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
};

export const partnersAPI = {
  getAll: () => api.get('/partners'),
  getOne: (id) => api.get(`/partners/${id}`),
  create: (data) => api.post('/partners', data),
  updateStatus: (id, status) => api.patch(`/partners/${id}/status`, { status }),
  delete: (id) => api.delete(`/partners/${id}`),
};

export default api;
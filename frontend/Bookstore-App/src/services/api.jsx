// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchBooks = (page, limit) =>
  api.get(`/books?page=${page}&limit=${limit}`);

export const fetchBookById = (id) => api.get(`/books/${id}`);

export const fetchReviewsByBook = (bookId) =>
  api.get(`/reviews/${bookId}`);

export const registerUser = (data) => api.post('/auth/register', data);

export const loginUser = (data) => api.post('/auth/login', data);

export default api;

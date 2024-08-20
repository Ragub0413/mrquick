import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const signInStaff = (loginData) => API.post('/employee/signin', loginData);
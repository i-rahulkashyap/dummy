import api from './api';

export const AuthService = {
  login: async (credentials) => {
    const response = await api.post('/login', { user: credentials });
    const token = response.headers.authorization;
    console.log("token", token)
    if (token) {
      localStorage.setItem('token', token);
    }
    return response.data;
  },

  signup: async (userData) => {
    const response = await api.post('/signup', { user: userData });
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response.data;
  },

  logout: async () => {
    const response = await api.delete('/logout');
    localStorage.removeItem('token');
    return response.data;
  }
};

export const ReferralService = {
  sendReferral: async (email) => {
    return await api.post('/referrals', { email });
  }
};
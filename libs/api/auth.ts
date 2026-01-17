import api from './index';

export const login = async (credentials: any) => {
  // Dummy endpoint
  return new Promise((resolve) => {
    setTimeout(() => resolve({ token: 'dummy-token', user: { name: 'John Doe' } }), 1000);
  });
};

export const register = async (data: any) => {
  // Dummy endpoint
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1000);
  });
};

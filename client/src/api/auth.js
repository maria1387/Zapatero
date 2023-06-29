import axios from 'axios';
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/register`,
    registrationData
  );
}

export async function onLogin(loginData) {
  return await axios.post( `${import.meta.env.VITE_API_URL}/login`, loginData);
}

export async function onLogout() {
  return await axios.get(`${import.meta.env.VITE_API_URL}/logout`);
}

export async function fetchProtectedInfo() {
  return await axios.get(`${import.meta.env.VITE_API_URL}/protected`);
}

export async function fetchRoles(email) {
  return await axios.post(`${import.meta.env.VITE_API_URL}/prueba`, email);
}

export async function fetchForgotPassword(email) {
  return await axios.post(`${import.meta.env.VITE_API_URL}/forgot-password`,email );
}

export async function fetchResetPassword() {
  return await axios.post(`${import.meta.env.VITE_API_URL}/reset-password` );
}
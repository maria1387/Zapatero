import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8001/api/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:8001/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:8001/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:8001/api/protected')
}
export async function fetchRoles() {
  return await axios.get('http://localhost:8001/api/prueba')
}


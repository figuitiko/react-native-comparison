import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.73:3000/api'
})

export const loginFetch = async (email, password) => {
  return await axiosInstance.post('/login', { email, password })
}

import axios from 'axios'

export const login = async (data) => {
  try {
    const rsp = await axios.post('http://localhost:3000/api/auth/login', data)
    return [null, rsp.data]
  } catch (error) {
    return [error, null]
  }
}

export const register = async (data) => {
  try {
    const rsp = await axios.post('http://localhost:3000/api/auth/register', data)
    return [null, rsp.data]
  } catch (error) {
    return [error, null]
  }
}

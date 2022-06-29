import axios from 'axios'

export const checkUser = (value) => axios.post('http://localhost:5035/userData', { value })
export const createUser = (value) => axios.post('http://localhost:5035/userData/register', { value })

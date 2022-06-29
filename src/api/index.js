import axios from 'axios'

// User
export const checkUser = (value) => axios.post('http://localhost:5035/userData', { value })
export const createUser = (value) => axios.post('http://localhost:5035/userData/register', { value })

// Movies
export const getMovies = () => axios.get('http://localhost:5035/movie')
export const shareMovies = (value) => axios.post('http://localhost:5035/movie/shared', { value })

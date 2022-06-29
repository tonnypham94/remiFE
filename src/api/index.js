import axios from 'axios'
import { YOUTUBE_KEY_API } from '../utils/const'

// User
export const checkUser = (value) => axios.post('http://localhost:5035/userData', { value })
export const createUser = (value) => axios.post('http://localhost:5035/userData/register', { value })

// Movies
export const getMovieDetails = (id) => axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${YOUTUBE_KEY_API}`)
export const getMovies = () => axios.get('http://localhost:5035/movie')
export const shareMovies = (value) => axios.post('http://localhost:5035/movie/shared', { value })

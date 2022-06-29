import axios from 'axios'
import { YOUTUBE_KEY_API } from '../utils/const'

const QA_URL = 'https://remi-backend1.herokuapp.com/'
const LOCAL_URL = 'http://localhost:8000/'

// User
export const checkUser = (value) => axios.post(`${QA_URL}userData`, { value })
export const createUser = (value) => axios.post(`${QA_URL}userData/register`, { value })

// Movies
export const getMovieDetails = (id) => axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${YOUTUBE_KEY_API}`)
export const getMovies = () => axios.get(`${QA_URL}movie`)
export const shareMovies = (value) => axios.post(`${QA_URL}movie/shared`, { value })

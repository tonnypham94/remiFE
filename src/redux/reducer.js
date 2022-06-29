import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user'
import moviesReducer from './movies'

export default combineReducers({
  user: userReducer,
  movies: moviesReducer,
})

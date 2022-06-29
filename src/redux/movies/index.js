import { createSlice } from '@reduxjs/toolkit'
import { shareMoviesReducers, shareMoviesSlice } from './shareMovies'
import { getMoviesReducers, getMoviesSlice } from './getMovies'

const initialState = {
  items: [],
  error: false,
  loading: false
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: {
    ...shareMoviesReducers,
    ...getMoviesReducers
  }
})

// Reducer
export default moviesSlice.reducer

// Actions
export {
  shareMoviesSlice,
  getMoviesSlice
}

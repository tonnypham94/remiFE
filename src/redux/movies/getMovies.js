import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../../api'

export const getMoviesSlice = createAsyncThunk('movies/getMovies', async () => {
  const movies = await getMovies()
  return movies
})

export const getMoviesReducers = {
  [getMoviesSlice.pending]: (state) => {
    state.loading = true
  },

  [getMoviesSlice.rejected]: (state, action) => {
    state.loading = false
    state.error = action?.payload?.error || true
  },

  [getMoviesSlice.fulfilled]: (state, action) => {
    state.loading = false
    state.items = action?.payload?.data?.data
  },
}

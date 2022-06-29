import { createAsyncThunk } from '@reduxjs/toolkit'
import { shareMovies } from '../../api'

export const shareMoviesSlice = createAsyncThunk('movies/shareMovies', async (data) => {
  const movies = await shareMovies(data)
  return movies
})

export const shareMoviesReducers = {
  [shareMoviesSlice.pending]: (state) => {
    state.loading = true
  },

  [shareMoviesSlice.rejected]: (state, action) => {
    state.loading = false
    state.error = action?.payload?.error || true
  },

  [shareMoviesSlice.fulfilled]: (state, action) => {
    state.loading = false
  },
}

import { createAsyncThunk } from '@reduxjs/toolkit'
import { checkUser } from '../../api'

export const checkUserSlice = createAsyncThunk('user/checkUser', async (data) => {
  const user = await checkUser(data)
  return user
})

export const checkUserReducers = {
  [checkUserSlice.pending]: (state) => {
    state.loading = true
  },

  [checkUserSlice.rejected]: (state, action) => {
    state.loading = false
    state.error = action?.payload?.error || true
  },

  [checkUserSlice.fulfilled]: (state) => {
    state.loading = false
  },
}

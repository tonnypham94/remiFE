import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUser } from '../../api'

export const createUserSlice = createAsyncThunk('user/createUser', async (data) => {
  const user = await createUser(data)
  return user
})

export const createUserReducers = {
  [createUserSlice.pending]: (state) => {
    state.loading = true
  },

  [createUserSlice.rejected]: (state, action) => {
    state.loading = false
    state.error = action?.payload?.error || true
  },

  [createUserSlice.fulfilled]: (state, action) => {
    localStorage.setItem('userData', JSON.stringify(action?.payload?.data?.data))
    state.data = action?.payload?.data?.data
    state.loading = false
  },
}

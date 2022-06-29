import { createSlice } from '@reduxjs/toolkit'
import { createUserReducers, createUserSlice } from './createUser'
import { checkUserReducers, checkUserSlice } from './checkUser'

const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}
const initialState = {
  data: userData,
  error: false,
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUserSlice: (state) => {
      localStorage.removeItem('userData')
      state.data = {}
    },
    loginUserSlice: (state, action) => {
      localStorage.setItem('userData', JSON.stringify(action?.payload))
      state.data = action?.payload
    },
  },
  extraReducers: {
    ...createUserReducers,
    ...checkUserReducers
  }
})

// Reducer
export default userSlice.reducer

// Actions
const { logoutUserSlice, loginUserSlice } = userSlice.actions
export {
  createUserSlice,
  checkUserSlice,
  logoutUserSlice,
  loginUserSlice
}

import { createSlice } from '@reduxjs/toolkit'
import { createUserReducers, createUserSlice } from './createUser'
import { checkUserReducers, checkUserSlice } from './checkUser'

const user = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}
console.log('user', user)
const initialState = {
  data: user,
  error: false,
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    ...createUserReducers,
    ...checkUserReducers
  }
})

// Reducer
export default userSlice.reducer

// Actions
export {
  createUserSlice,
  checkUserSlice
}

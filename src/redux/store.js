import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

function configStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  })
}

const store = configStore()

export { store }

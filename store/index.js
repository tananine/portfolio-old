import navbarReducer from './navbar'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { navbar: navbarReducer },
})

export default store

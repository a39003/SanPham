import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide'
import userReducer from './slides/userSlides'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})
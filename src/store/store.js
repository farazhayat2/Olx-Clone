import { configureStore } from '@reduxjs/toolkit'
import productReducer  from '../components/features/product/productSlice'
import userReducer from "../components/features/User/userSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
})
import { configureStore } from '@reduxjs/toolkit'
import movieSlice  from './Services/MoviesSlice'

export const store = configureStore({
    reducer: {
        movie : movieSlice
    }
})
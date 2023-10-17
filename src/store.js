import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from './features/toggle'
export const store = configureStore({
    reducer: {
        allStates: toggleSlice
    }
})
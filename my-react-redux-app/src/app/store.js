import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../features/Counter/counterSlice';

export const store = configureStore({
    reducer: {
         counters: counterSlice
    }
});
import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice'
import toastReducer from "./toastSlice";

export const store = configureStore({
    reducer:{
        page:pageReducer,
        toast:toastReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
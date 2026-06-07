import {createSlice} from '@reduxjs/toolkit'

type ToastState = {
    show:boolean;
    message:string;
    variant: "success" | "danger" | "warning" | "info";
}

const initialState:ToastState = {
    show:false,
    message:"",
    variant:"success"
}

const toastSlice = createSlice({
    name:"toast",
    initialState,
    reducers:{
        showToast: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant || "success";
    },
    hideToast: (state) => {
      state.show = false;
    },

    }
})

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
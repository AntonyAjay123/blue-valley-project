import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type pageState = {
    curPage:string,
    project:boolean,
    curProject:string
}

const initialState: pageState = {
    curPage:'home',
    project:false,
    curProject:''
}

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        setCurPage(state,action:PayloadAction<string>){
            state.curPage = action.payload
        },
        setProject(state,action:PayloadAction<boolean>){
            state.project = action.payload
        },
        setCurProject(state,action:PayloadAction<string>){
            state.curProject = action.payload
        }
    }
})
export const {
  setCurPage,
  setCurProject,
  setProject
} = pageSlice.actions;

export default pageSlice.reducer;
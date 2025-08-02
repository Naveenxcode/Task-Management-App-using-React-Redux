import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tasks:[],
    Loading:false,
    error:null,
    Status:'All'
    
}

export const taskSlice = createSlice({
    name:"Tasks",
    initialState,
    reducers:{
        Addtask:(state,action)=>{
            state.tasks.push(action.payload) 
        },
        dtlTask :(state,action)=>{
            
        }

    }

})

export const {Addtask} = taskSlice.actions;

export default taskSlice.reducer;
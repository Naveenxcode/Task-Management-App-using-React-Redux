import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './taskSclice' 

export const Store = configureStore({
    reducer:{
        tasks: taskSlice //key: value --pair 
    }
})


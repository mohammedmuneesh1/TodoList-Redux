import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Reducer/Reducer";

export default configureStore({
    reducer:{
        todo:TodoReducer,
    }
    
})
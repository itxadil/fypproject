import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./redux/userSlice"

export default configureStore({
    reducer:{
        user:useReducer
    }
})
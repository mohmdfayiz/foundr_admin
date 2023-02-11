import { configureStore } from "@reduxjs/toolkit";
import authorizerReducer from "../features/authorizer/authSlice";
import modalReducer from "../features/eventModal/modalSlice"

export default configureStore({
    reducer:{
        authorizer: authorizerReducer,
        showModal:modalReducer,
    }
})
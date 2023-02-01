import { configureStore } from "@reduxjs/toolkit";
import authorizerReducer from "../features/authorizer/authSlice";

export default configureStore({
    reducer:{
        authorizer: authorizerReducer,
    }
})
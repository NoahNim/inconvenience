import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore";

const rootReducer = {
    authUser: authReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store
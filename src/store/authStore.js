import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

// ACTION TYPES
// const setUser = createAction('SET_USER');
// const removeUser = createAction('REMOVE_USER')

// thunks

// SIGN UP
export const signUp = (payload) => createAsyncThunk(
    "authStore/SIGN_UP",
    async () => { try {
            const {user} = await Auth.signUp({
                username,
                password,
                autoSignIn: {
                    enabled: true,
                }
            })
            payload = user;
        } catch (error) {
            console.log('error signing up: ', error)
        }
    }
)

// STATE AND REDUCER
const userState = {}
const authReducer = createReducer(userState, (builder) => {
    builder
        .addCase("authStore/SIGN_UP", (state, action) => {
            state = { user: action.payload }
        })
        .addDefaultCase((state, action) => {})
})

export default authReducer;
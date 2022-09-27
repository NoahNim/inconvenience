import { createReducer, createAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

// ACTION TYPES
const setUser = createAction('SET_USER');
const removeUser = createAction('REMOVE_USER')

// ACTION CREATORS
export async function signUp() {
    try {
        const {user} = await Auth.signUp({
            username,
            password,
            autoSignIn: {
                enabled: true,
            }
        })
    } catch (error) {
        console.log('error signing up: ', error)
    }
}
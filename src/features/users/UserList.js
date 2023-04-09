import React from 'react'
import { CreateSlice, createSlice } from '@reduxjs/toolkit';
import { UserData } from './FakeData';
// createSlice() uses the Immer library internally to turn mutating code into immutable updates.

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UserData },
    reducers: {
        addUser: (state, action) => {
            //write code for adding a user
            state.value.push(action.payload) //this qwill add new user
        },
        deleteUser: (state, action) => {
            state.value= state.value.filter((user)=> user.id !==action.payload.id)
        }, 
        updateUsername:(state, action) =>{
            state.value.map((user)=>{
                if(user.id === action.payload.id){
                    user.username= action.payload.username
                }
            })
        }
    }
})

export const { addUser, deleteUser, updateUsername } = userSlice.actions //exporting all the action in userSlice 
export default userSlice.reducer
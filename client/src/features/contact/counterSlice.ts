import { createSlice } from "@reduxjs/toolkit";

export interface counterState{
    title: string;
    data: number;
}

const initialState: counterState = {
    data: 42,
    title: "Allah is the only God we pray. we testify that from counterslice!"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        },
    }
})

export const {increment, decrement} = counterSlice.actions;

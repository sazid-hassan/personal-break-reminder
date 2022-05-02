import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const secondSlice = createSlice({
    name: 'second',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        resetTime: (state) => {
            state.value = 0;
        }
    },
})

// Action creators are generated for each case reducer function
export const { decrement, incrementByAmount, resetTime } = secondSlice.actions;

export default secondSlice.reducer
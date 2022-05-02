import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
}

export const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        setTrue: (state) => {
            state.status = true
        },
        setFalse: (state) => {
            state.status = false
        }
    }
});

export const { setTrue, setFalse } = statusSlice.actions;
export default statusSlice.reducer;

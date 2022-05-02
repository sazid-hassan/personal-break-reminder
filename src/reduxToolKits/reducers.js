import { combineReducers } from "@reduxjs/toolkit";
import statusSlice from "./statusSlice";
import secondSlice from "./secondSlice";


export default combineReducers({
    showStat: statusSlice,
    second: secondSlice
})
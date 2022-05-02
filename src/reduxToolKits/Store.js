import { configureStore } from '@reduxjs/toolkit';

import secondSlice from './secondSlice';
import statusSlice from './statusSlice';

export const store = configureStore({
    reducer: {
        second: secondSlice,
        showStatus: statusSlice,
    },
})
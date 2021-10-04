// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { DaysState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: DaysState = {
    days: [],
};

export const daysSlice = createSlice({
    name: 'weather',
    initialState,
    reducers,
});

export const daysActions = daysSlice.actions;
export default daysSlice.reducer;

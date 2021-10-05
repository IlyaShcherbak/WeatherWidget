// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { StateFilter } from './types';

// Reducers
import * as reducers from './reducers';

export const initialState: StateFilter = {
    selectedDayId:  null,
    minTemperature: null,
    maxTemperature: null,
    weatherType:    null,
};

export const stateFilterSlice = createSlice({
    name: 'stateFilter',
    initialState,
    reducers,
});

export const stateFilterActions = stateFilterSlice.actions;
export default stateFilterSlice.reducer;

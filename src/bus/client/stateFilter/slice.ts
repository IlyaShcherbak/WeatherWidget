// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { StateFilter } from './types';

// Reducers
import {  selectDay, selectMinTemperature, selectMaxTemperature, typeWeather } from './reducers';


const initialState: StateFilter = {
    selectedDay:    null,
    minTemperature: null,
    maxTemperature: null,
    weatherType:    null,
};

export const stateFilterSlice = createSlice({
    name:     'stateFilter',
    initialState,
    reducers: {
        selectDay,
        selectMinTemperature,
        selectMaxTemperature,
        typeWeather,
    },
});

export const stateFilterActions = stateFilterSlice.actions;
export default stateFilterSlice.reducer;

// Tools
import { initialState } from './slice';

// Types
import * as types from './types';

export const selectDay: types.SelectDayReducerContract = (state, action) => {
    state.selectedDayId = action.payload;
};

export const setFilters: types.SetFiltersReducerContact = (state, action) => ({
    ...state,
    ...action.payload,
});

export const resetFilters = () => initialState;


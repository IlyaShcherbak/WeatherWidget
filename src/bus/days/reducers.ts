// Types
import * as types from './types';

export const setDays: types.SetDaysContract = (state, action) => {
    state.days = action.payload;
    state.currentDay = action.payload[ 0 ];
};

export const setCurrentWeather: types.SetCurrentDayContract = (state, action) => {
    state.currentDay = state.days?.find((day) => day.id === action.payload);
};

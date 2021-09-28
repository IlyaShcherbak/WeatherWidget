// Types
import * as types from './types';

export const selectDay: types.SelectDayContract = (state, action) => {
    state.selectedDay = action.payload;
};

export const selectMinTemperature:types.SelectTemperatureContract = (state, action) => {
    state.minTemperature = action.payload;
};

export const selectMaxTemperature: types.SelectTemperatureContract = (state, action) => {
    state.maxTemperature = action.payload;
};

export const typeWeather: types.WeatherTypeContract = (state, action) => {
    state.weatherType = action.payload;
};

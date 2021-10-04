// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export enum WeatherTypesEnum {
    cloudy = 'cloudy',
    rainy = 'rainy',
    sunny = 'sunny',
}

export type WeatherTypes = keyof typeof WeatherTypesEnum;

export type Day = {
    id: string,
    rain_probability: number,
    humidity: number,
    day: number,
    temperature: number,
    type: WeatherTypes,
}

export type DaysState = {
    days: Array<Day>;
    currentDay?: Day;
}

// Contracts
export type SetDaysContract = CaseReducer<DaysState, PayloadAction<Array<Day>>>;

export type SetCurrentDayContract = CaseReducer<DaysState, PayloadAction<string>>;

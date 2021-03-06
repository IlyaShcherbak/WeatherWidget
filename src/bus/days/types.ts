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

export type DaysState = Array<Day>;

// Contracts
export type SetDaysContract = CaseReducer<DaysState, PayloadAction<DaysState>>

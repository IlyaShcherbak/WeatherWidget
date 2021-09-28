// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
import { WeatherTypes, Day } from '../../days/types';

// State
export type StateFilter = {
    selectedDay: Day['id'] | null
    minTemperature: number | null
    maxTemperature: number | null
    weatherType: WeatherTypes | null
}

// Contracts
export type SelectDayContract = CaseReducer<StateFilter, PayloadAction<string>>
export type SelectTemperatureContract = CaseReducer<StateFilter, PayloadAction<number | null>>
export type WeatherTypeContract = CaseReducer<StateFilter, PayloadAction<WeatherTypes | null>>

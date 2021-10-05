// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
import { WeatherTypes, Day } from '../../days/types';

// State
export type StateFilter = {
    selectedDayId: Day['id'] | null
    minTemperature: number | null
    maxTemperature: number | null
    weatherType: WeatherTypes | null
}

// Contracts
type SelectDayPayload = Day['id'] | null
export type SelectDayReducerContract = CaseReducer<StateFilter, PayloadAction<SelectDayPayload>>
export type SelectDayHandlerContract = (id: SelectDayPayload) => void

type SetFilltersPayload = Partial<StateFilter>
export type SetFiltersReducerContact = CaseReducer<StateFilter, PayloadAction<SetFilltersPayload>>
export type SetFiltersHandlerContact = (filters: SetFilltersPayload) => void

// Core
import React, { FC, useState } from 'react';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import * as S from './styles';

// Types
import { WeatherTypes, WeatherTypesEnum } from '../../../bus/days/types';
import { SetFiltersHandlerContact, StateFilter } from '../../../bus/client/stateFilter/types';

type PropTypes = {
    setFilters: SetFiltersHandlerContact
    stateFilter: StateFilter
    resetFilters: Function
}

export type WeatherTypeStateType = WeatherTypes | null;
const weatherTypeInitialState: WeatherTypeStateType = null;

export type TemperatureStateType = {
    minTemperature: number | null,
    maxTemperature: number | null,
}

const temperatureInitialState: TemperatureStateType = {
    minTemperature: null,
    maxTemperature: null,
};

export const WeatherFilter: FC<PropTypes> = ({
    setFilters, resetFilters, stateFilter,
}) => {
    const [
        temperatureState,
        setTemperatureState,
        setInitialTemperatureState,
    ] = useForm<TemperatureStateType>(temperatureInitialState);
    const [ weatherTypeState, setWeatherTypeState ] = useState<WeatherTypeStateType>(weatherTypeInitialState);

    const filters = {
        ...temperatureState,
        weatherType: weatherTypeState,
    };

    const isReduxFiltersFullfiled = Object.entries({
        ...stateFilter,
        selectedDayId: null, // насильственный костыль
    }).some(([ , value ]) => value !== null);

    const setFiltersHandler = () => {
        if (isReduxFiltersFullfiled) {
            resetFilters();
            setInitialTemperatureState(temperatureInitialState);
            setWeatherTypeState(weatherTypeInitialState);
        } else {
            setFilters(filters);
        }
    };

    return (
        <S.FilterContainer>
            <S.Checkbox
                className = { weatherTypeState === WeatherTypesEnum.cloudy ? 'selected' : '' }
                onClick = { () => setWeatherTypeState(WeatherTypesEnum.cloudy) }>
                Cloudy
            </S.Checkbox>
            <S.Checkbox
                className = { weatherTypeState === WeatherTypesEnum.sunny ? 'selected' : '' }
                onClick = { () => setWeatherTypeState(WeatherTypesEnum.sunny) }>
                Sunny
            </S.Checkbox>
            <S.CustomFieldsBox>
                <S.CustomLabel>Min temperature</S.CustomLabel>
                <S.CustomInput
                    name = 'minTemperature'
                    type = 'number'
                    value = { String(temperatureState.minTemperature ?? '') }
                    onChange = { setTemperatureState }
                />
            </S.CustomFieldsBox>
            <S.CustomFieldsBox>
                <S.CustomLabel>Max temperature</S.CustomLabel>
                <S.CustomInput
                    name = 'maxTemperature'
                    type = 'number'
                    value = { String(temperatureState.maxTemperature ?? '') }
                    onChange = { setTemperatureState }
                />
            </S.CustomFieldsBox>
            <S.FilterButton onClick = { () => void setFiltersHandler() }>
                {isReduxFiltersFullfiled ? 'Reset' : 'Filter'}
            </S.FilterButton>
        </S.FilterContainer>
    );
};

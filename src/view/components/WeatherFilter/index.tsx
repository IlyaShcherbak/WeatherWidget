// Core
import React, { FC } from 'react';

// Weather types
import { WeatherTypes, WeatherTypesEnum } from '../../../bus/days/types';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import { FilterContainer, Checkbox, CustomFieldsBox, CustomLabel, CustomInput, FilterButton } from './styles';

type PropTypes = {
    setMinTemperature:(temperature: number | null) => void,
    setMaxTemperature:(temperature: number | null) => void,
    setTypeWeather:(dayType: WeatherTypes | null) => void,
}

type StateType = {
    type: WeatherTypes | null,
    minTemp: number | null,
    maxTemp: number | null,
}

const initialState: StateType = {
    type:    null,
    minTemp: null,
    maxTemp: null,
};

export const WeatherFilter: FC<PropTypes> = ({ setMinTemperature, setMaxTemperature, setTypeWeather }) => {
    const [ filters, handleChange, handeRadioGroupChange ] = useForm<StateType, WeatherTypes>(initialState);
    console.log({ filters });

    return (
        <FilterContainer>
            <Checkbox
                className = { filters.type === WeatherTypesEnum.cloudy ? 'selected' : '' }
                onClick = { () => handeRadioGroupChange('type', WeatherTypesEnum.cloudy) }>
                Cloudy
            </Checkbox>
            <Checkbox
                className = { filters.type === WeatherTypesEnum.sunny ? 'selected' : '' }
                onClick = { () => handeRadioGroupChange('type', WeatherTypesEnum.sunny) }>
                Sunny
            </Checkbox>
            <CustomFieldsBox>
                <CustomLabel>Min temperature</CustomLabel>
                <CustomInput
                    id = 'min-temperature'
                    name = 'minTemp'
                    type = 'number'
                    value = { filters.minTemp === null ? '' : filters.minTemp }
                    onChange = { handleChange }
                />
            </CustomFieldsBox>
            <CustomFieldsBox>
                <CustomLabel>Max temperature</CustomLabel>
                <CustomInput
                    id = 'max-temperature'
                    name = 'maxTemp'
                    type = 'number'
                    value = { filters.maxTemp === null ? '' : filters.maxTemp }
                    onChange = { handleChange }
                />
            </CustomFieldsBox>
            <FilterButton onClick = { () => {
                setMinTemperature(filters.minTemp);
                setMaxTemperature(filters.maxTemp);
                setTypeWeather(filters.type);
            } }>
                Filter
            </FilterButton>
        </FilterContainer>
    );
};

// Core
import React, { FC } from 'react';

// Styles
import { FilterContainer, Checkbox, CustomFieldsBox, CustomLabel, CustomInput, FilterButton } from './styles';

type PropTypes = {}

export const WeatherFilter: FC<PropTypes> = () => {
    return (
        <FilterContainer>
            <Checkbox>Облачно</Checkbox>
            <Checkbox className = 'selected'>Солнечно</Checkbox>
            <CustomFieldsBox>
                <CustomLabel>Минимальная температура</CustomLabel>
                <CustomInput
                    id = 'min-temperature'
                    type = 'text'
                />
            </CustomFieldsBox>
            <CustomFieldsBox>
                <CustomLabel>Максимальная температура</CustomLabel>
                <CustomInput
                    id = 'max-temperature'
                    type = 'text'
                />
            </CustomFieldsBox>
            <FilterButton>Отфильтровать</FilterButton>
        </FilterContainer>
    );
};

// Core
import React, { FC } from 'react';

// Types
import { Day } from '../../../bus/days/types';

// Styles
import { CurrentWeatherContainer, Temperature, Meta, Rainy, Humidity } from './styles';

type PropTypes = {
    day: Day
}

export const WeatherCurrent: FC<PropTypes> = ({ day }) => {
    return (
        <CurrentWeatherContainer>
            <Temperature>{day.temperature}</Temperature>
            <Meta>
                <Rainy>%{day.rain_probability}</Rainy>
                <Humidity>%{day.humidity}</Humidity>
            </Meta>
        </CurrentWeatherContainer>
    );
};

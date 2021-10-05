// Core
import React, { FC } from 'react';

// Types
import { Day } from '../../../bus/days/types';

// Styles
import { CurrentWeatherContainer, Temperature, Meta, Rainy, Humidity } from './styles';

type PropTypes = {
    foundedDay?: Day
}

export const WeatherCurrent: FC<PropTypes> = ({ foundedDay }) => {
    return (
        <CurrentWeatherContainer>
            <Temperature>{foundedDay?.temperature}</Temperature>
            <Meta>
                <Rainy>%{foundedDay?.rain_probability}</Rainy>
                <Humidity>%{foundedDay?.humidity}</Humidity>
            </Meta>
        </CurrentWeatherContainer>
    );
};

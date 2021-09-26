// Core
import React, { FC } from 'react';

// Types
import { DaysState } from '../../../bus/days/types';

// Styles
import { Forecast } from './styles';

// Components
import { Day } from '../index';

type PropTypes = {
    weatherData: DaysState,
    setSelectDay: (dayIndex: number) => void
    selectedDay: number
}

export const WeatherForecast: FC<PropTypes> = ({ weatherData, selectedDay, setSelectDay }) => {
    const weekWeater = weatherData.slice(0, 7);

    return (
        <Forecast>
            {weekWeater.map((value, index) => (
                <Day
                    className = { index === selectedDay ? 'selected' : '' }
                    day = { value.day }
                    key = { `${value.id}+ ${index}` }
                    temperature = { value.temperature }
                    type = { value.type }
                    onDayClick = { () => setSelectDay(index) }
                />
            ))}
        </Forecast>
    );
};
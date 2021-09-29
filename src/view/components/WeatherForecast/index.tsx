// Core
import React, { FC } from 'react';

// Types
import { DaysState } from '../../../bus/days/types';

// Styles
import { Forecast, ErrorMessage } from './styles';

// Components
import { Day } from '../index';

type PropTypes = {
    Days: DaysState,
    setSelectDay: (dayIndex: string) => void
    selectedDay: string | null
}

export const WeatherForecast: FC<PropTypes> = ({ Days, selectedDay, setSelectDay }) => {
    const weekDays = Days.slice(0, 7);

    if (Days.length === 0) {
        return (
            <Forecast>
                <ErrorMessage>Filter Error</ErrorMessage>
            </Forecast>
        );
    }

    return (
        <Forecast>
            {weekDays.map((day) => (
                <Day
                    className = { day.id === selectedDay ? 'selected' : '' }
                    day = { day.day }
                    key = { `${day.id}` }
                    temperature = { day.temperature }
                    type = { day.type }
                    onDayClick = { () => setSelectDay(day.id) }
                />
            ))}
        </Forecast>
    );
};

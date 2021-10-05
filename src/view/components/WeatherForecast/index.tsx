// Core
import React, { FC } from 'react';

// Types
import { Day as IDay } from '../../../bus/days/types';

// Styles
import { Forecast, ErrorMessage } from './styles';

// Components
import { Day } from '../index';

type PropTypes = {
    days: Array<IDay>,
    setSelectDay: (dayId: string) => void
    foundedDayId: string | null
}

export const WeatherForecast: FC<PropTypes> = ({ days, foundedDayId, setSelectDay }) => {
    if (days.length === 0) {
        return (
            <Forecast>
                <ErrorMessage>Filter Error</ErrorMessage>
            </Forecast>
        );
    }

    return (
        <Forecast>
            {
                days.map((day) => (
                    <Day
                        className = { day.id === foundedDayId ? 'selected' : '' }
                        day = { day.day }
                        key = { `${day.id}` }
                        temperature = { day.temperature }
                        type = { day.type }
                        onDayClick = { () => setSelectDay(day.id) }
                    />
                ))
            }
        </Forecast>
    );
};

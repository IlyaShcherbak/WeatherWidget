// Core
import React, { FC } from 'react';
import moment from 'moment';

// Types
import { WeatherTypes } from '../../../bus/days/types';

// WeaterTypes
import { WeatrerImg } from '../../pages/WeatherWidget/weaterTypes';


// Styles
import { StyledDay } from './styles';

type PropTypes = {
    day: number,
    temperature: number,
    type: WeatherTypes,
    className?: string,
    onDayClick?: () => void
}

export const Day: FC<PropTypes> = ({ day, temperature, type, className, onDayClick }) => {
    return (
        <StyledDay
            className = { className }
            img = { WeatrerImg[ type ] }
            onClick = { onDayClick }>
            <p>{moment(day).format('dddd')}</p>
            <span>{temperature}</span>
        </StyledDay>
    );
};

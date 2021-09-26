// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import { Head, CurrentIcon, CurrentDate, WeekDay, MonthDay } from './styles';

// Types
import { Day } from '../../../bus/days/types';

// WeaterTypes
import { WeatrerImg } from '../../pages/WeatherWidget/weaterTypes';


type PropTypes = {
    day: Day
}

export const WeatherHeader: FC<PropTypes> = ({ day }) => {
    if (!day) {
        return null;
    }

    return (
        <Head>
            <CurrentIcon imgWeather = { WeatrerImg[ day.type ] }></CurrentIcon>
            <CurrentDate>
                <WeekDay>{moment(day.day).format('dddd')}</WeekDay>
                <MonthDay>{moment(day.day).format('D MMMM')}</MonthDay>
            </CurrentDate>
        </Head>
    );
};

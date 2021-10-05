// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import { Head, CurrentIcon, CurrentDate, WeekDay, MonthDay } from './styles';

// Types
import { Day } from '../../../bus/days/types';

// WeaterTypes
import { WeatherIcons } from '../../pages/WeatherWidget/weaterTypes';


type PropTypes = {
    foundedDay?: Day
}

export const WeatherHeader: FC<PropTypes> = ({ foundedDay }) => {
    return (
        <Head>
            <CurrentIcon imgWeather = {
                foundedDay?.type
                && WeatherIcons[ foundedDay.type ]
            }>
            </CurrentIcon>
            <CurrentDate>
                <WeekDay>
                    {
                        foundedDay?.day
                        && moment(foundedDay.day).format('dddd')
                    }
                </WeekDay>
                <MonthDay>
                    {
                        foundedDay?.day
                        && moment(foundedDay.day).format('D MMMM')
                    }
                </MonthDay>
            </CurrentDate>
        </Head>
    );
};

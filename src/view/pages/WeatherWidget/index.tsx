// Core
import React, { FC, useState } from 'react';
import { useDays } from '../../../bus/days';

// Components
import { ErrorBoundary,
    WeatherHeader as Header,
    WeatherFilter as Filter,
    WeatherCurrent as Current,
    WeatherForecast as Forecast,
} from '../../components';

// Styles
import { WeatherContainer, MainContainer } from './styles';


const WeatherWidget: FC = () => {
    const { data } = useDays();
    console.log('🚀 ~ file: index.tsx ~ line 20 ~ data', data);
    const [ currentDayIndex, setCurrentDayIndex ] = useState(0);

    if (!data || data.length === 0) {
        return null;
    }
    const currentDay = data[ currentDayIndex ];

    return (
        <WeatherContainer>
            <MainContainer>
                <Filter/>
                <Header day = { currentDay }/>
                <Current day = { currentDay }/>
                <Forecast
                    selectedDay = { currentDayIndex }
                    setSelectDay = { setCurrentDayIndex }
                    weatherData = { data }
                />
            </MainContainer>
        </WeatherContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);

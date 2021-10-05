// Core
import React, { FC } from 'react';

// Components
import {
    ErrorBoundary,
    WeatherHeader,
    WeatherFilter,
    WeatherCurrent,
    WeatherForecast,
} from '../../components';

// Redux
import { useDays } from '../../../bus/days';
import { useStateFilter } from '../../../bus/client/stateFilter';

// Styles
import { WeatherContainer, MainContainer } from './styles';

const WeatherWidget: FC = () => {
    const { days, foundedDay, isFetching } = useDays();
    const {
        stateFilter,
        actions: {
            selectDay,
            setFilters,
            resetFilters,
        },
    } = useStateFilter();


    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <WeatherContainer>
            <MainContainer>
                <WeatherFilter
                    resetFilters = { resetFilters }
                    setFilters = { setFilters }
                    stateFilter = { stateFilter }
                />
                <WeatherHeader foundedDay = { foundedDay } />
                <WeatherCurrent foundedDay = { foundedDay } />
                <WeatherForecast
                    days = { days }
                    foundedDayId = { foundedDay?.id ?? null }
                    setSelectDay = { selectDay }
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

// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary,
    WeatherHeader as Header,
    WeatherFilter as Filter,
    WeatherCurrent as Current,
    WeatherForecast as Forecast,
} from '../../components';

// Redux
import { useDays } from '../../../bus/days';
import { useStateFilter } from '../../../bus/client/stateFilter';

// Styles
import { WeatherContainer, MainContainer } from './styles';


const WeatherWidget: FC = () => {
    const { isFetching } = useDays();
    const {
        findedDay,
        filteredDays,
        stateFilter: { selectedDay },
        actions: {
            selectDay,
            selectMinTemperature,
            selectMaxTemperature,
            selectTypeWeather },
    } = useStateFilter();

    if (isFetching || !findedDay) {
        return <div>Loading...</div>;
    }

    return (
        <WeatherContainer>
            <MainContainer>
                <Filter
                    setMaxTemperature = { selectMaxTemperature }
                    setMinTemperature = { selectMinTemperature }
                    setTypeWeather = { selectTypeWeather }
                />
                <Header day = { findedDay }/>
                <Current day = { findedDay }/>
                <Forecast
                    Days = { filteredDays }
                    selectedDay = { selectedDay }
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

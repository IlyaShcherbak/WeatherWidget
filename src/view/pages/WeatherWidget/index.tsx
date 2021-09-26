// Core
import React, { FC } from 'react';
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

    return (
        <WeatherContainer>
            <MainContainer>
                <Filter/>
                {data && <Header day = { data[ 0 ] }/>}
                {data && <Current day = { data[ 0 ] }/>}
                <Forecast weatherData = { data }/>
            </MainContainer>
        </WeatherContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <WeatherWidget />
    </ErrorBoundary>
);

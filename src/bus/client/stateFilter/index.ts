// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';

// Action
import { stateFilterActions } from './slice';

// Types
import { WeatherTypes, Day } from '../../days/types';
import { daysActions } from '../../days/slice';

export const useStateFilter = ()=>{
    const dispatch = useDispatch();
    const { stateFilter, weather: { days, currentDay }} = useSelector((state) => state);

    const filteredDays = days.filter(({ temperature, type }) => {
        const { minTemperature, maxTemperature, weatherType  } = stateFilter;

        if (maxTemperature && temperature > maxTemperature) {
            return false;
        } else if (minTemperature && temperature < minTemperature) {
            return false;
        } else if (weatherType && weatherType !== type) {
            return false;
        }

        return true;
    });

    const selectMinTemperature = (temperature: number | null) => void dispatch(
        stateFilterActions.selectMinTemperature(temperature),
    );
    const selectMaxTemperature = (temperature: number | null) => void dispatch(
        stateFilterActions.selectMaxTemperature(temperature),
    );
    const selectTypeWeather = (dayType: WeatherTypes | null) => void dispatch(
        stateFilterActions.typeWeather(dayType),
    );
    const selectDay = (id: Day['id']) => void dispatch(daysActions.setCurrentWeather(id));

    return {
        stateFilter,
        findedDay: currentDay,
        filteredDays,
        actions:   {
            selectDay,
            selectMinTemperature,
            selectMaxTemperature,
            selectTypeWeather,
        },
    };
};

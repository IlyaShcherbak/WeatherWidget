// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';

// Action
import { stateFilterActions } from './slice';

// Types
import { WeatherTypes, Day } from '../../days/types';

export const useStateFilter = ()=>{
    const dispatch = useDispatch();
    const { stateFilter, days } = useSelector((state) => state);

    const findedDay = days?.find((day) => day.id === stateFilter.selectedDay);
    console.log(days);

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
    const selectDay = (id: Day['id']) => void dispatch(stateFilterActions.selectDay(id));

    return {
        stateFilter,
        findedDay,
        filteredDays,
        actions: {
            selectDay,
            selectMinTemperature,
            selectMaxTemperature,
            selectTypeWeather,
        },
    };
};

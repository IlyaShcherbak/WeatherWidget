// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { useTogglersRedux } from '../client/togglers';
import { useStateFilter } from '../client/stateFilter';
import { fetchDaysActionAsync } from './saga/actions';

// Hooks
import { useSelector } from '../../tools/hooks';

export const useDays = () => {
    const dispatch = useDispatch();
    const days = useSelector(({ weather }) => weather);
    const { togglersRedux: { isDaysFetching }} = useTogglersRedux();
    const {
        stateFilter: {
            selectedDayId,
            minTemperature,
            maxTemperature,
            weatherType,
        },
        actions: { selectDay },
    } = useStateFilter();

    const filteredDays = days.filter(({ temperature, type }) => {
        if (maxTemperature && temperature > maxTemperature) {
            return false;
        } else if (minTemperature && temperature < minTemperature) {
            return false;
        } else if (weatherType && weatherType !== type) {
            return false;
        }

        return true;
    }).slice(0, 7);

    const foundedDay = filteredDays.find(({ id }) => selectedDayId === id);

    useEffect(() => {
        if (filteredDays.length !== 0 && !foundedDay) {
            selectDay(filteredDays[ 0 ].id);
        }
    }, [ filteredDays ]);

    useEffect(() => {
        dispatch(fetchDaysActionAsync());
    }, []);

    return {
        days:       filteredDays,
        foundedDay,
        isFetching: isDaysFetching,
    };
};

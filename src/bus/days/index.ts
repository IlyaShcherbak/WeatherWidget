// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// API
import { fetchForecast } from './api/fetchDays';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Actions
import { daysActions } from './slice';
import { stateFilterActions } from '../client/stateFilter/slice';

export const useDays = () => {
    const dispatch = useDispatch();
    const days = useSelector(({ days }) => days);
    const { togglersRedux: { isDaysFetching }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        (async () => {
            setTogglerAction({
                type:  'isDaysFetching',
                value: true,
            });

            const result = await fetchForecast();

            dispatch(daysActions.setDays(result));
            dispatch(stateFilterActions.selectDay(result[ 0 ].id));

            setTogglerAction({
                type:  'isDaysFetching',
                value: false,
            });
        })();
    }, []);

    return {
        days,
        isFetching: isDaysFetching,
    };
};

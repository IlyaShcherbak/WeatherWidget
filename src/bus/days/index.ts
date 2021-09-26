// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// API
import { fetchForecast } from './api/fetchDays';

// Togglers
import { useTogglersRedux } from '../client/togglers';

import { daysActions } from './slice';

export const useDays = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ days }) => days);
    const { togglersRedux: { isDaysFetching }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        (async () => {
            setTogglerAction({
                type:  'isDaysFetching',
                value: true,
            });
            const data = await fetchForecast();

            dispatch(daysActions.setDays(data));

            setTogglerAction({
                type:  'isDaysFetching',
                value: false,
            });
        })();
    }, []);

    return {
        data,
        isFetching: isDaysFetching,
    };
};

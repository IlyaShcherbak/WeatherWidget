// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// Saga actions
import { fetchDaysActionAsync } from './saga/actions';

// Redux
import { useTogglersRedux } from '../client/togglers';


export const useDays = () => {
    const dispatch = useDispatch();
    const { days } = useSelector(({ weather }) => weather);
    const { togglersRedux: { isDaysFetching }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        (() => {
            setTogglerAction({
                type:  'isDaysFetching',
                value: true,
            });

            dispatch(fetchDaysActionAsync());

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

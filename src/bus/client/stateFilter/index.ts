// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';

// Action
import { stateFilterActions } from './slice';

// Types
import * as types from './types';

export const useStateFilter = () => {
    const dispatch = useDispatch();
    const { stateFilter } = useSelector((state) => state);

    const setFilters: types.SetFiltersHandlerContact = (filters) => void dispatch(
        stateFilterActions.setFilters(filters),
    );

    const resetFilters = () => void dispatch(stateFilterActions.resetFilters());

    const selectDay: types.SelectDayHandlerContract = (id) => void dispatch(
        stateFilterActions.selectDay(id),
    );

    return {
        stateFilter,
        actions: {
            selectDay,
            setFilters,
            resetFilters,
        },
    };
};

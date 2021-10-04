// Types
import { Day } from '../../types';

// Sync actions
import { daysActions } from '../../slice';

// API
import * as API from '../api';

// Instruments
import { makeRequest } from '../../../../tools/utils';

export function* fetchDays() {
    yield makeRequest<Array<Day>>({
        fetcher:      API.fetchForecast,
        togglerType:  'isDaysFetching',
        succesAction: daysActions.setDays,
    });
}

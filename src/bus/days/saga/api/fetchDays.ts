// Types
import { FetchDays } from './types';

// Constants
import { API_WEATHER_URL } from '../../../../init';

// Tools
import { ControlledError } from '../../../../tools/utils';

export const fetchForecast: FetchDays = async () => {
    const response = await fetch(API_WEATHER_URL);

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'fetchForecast failed',
            statusCode: response.status,
            data:       {
                test: 'Fetch failed',
            },
        });
    }

    const { data } = await response.json();

    return data;
};

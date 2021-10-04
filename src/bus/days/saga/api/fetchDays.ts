// Types
import { FetchDays } from './types';

// Constants
import { API_WEATHER_URL } from '../../../../init';

export const fetchForecast: FetchDays = async () => {
    try {
        const response = await fetch(API_WEATHER_URL);

        if (response.status !== 200) {
            throw Error('Failed forecast fetching');
        }

        const { data } = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

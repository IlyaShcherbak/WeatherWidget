// Core
import { call, put } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';
import { errorsActions } from '../../../client/errors';

// Actions
import { daysActions } from '../../slice';

// Tools
import { ControlledError, IControlledError } from '../../../../tools/utils';
import { API_WEATHER_URL } from '../../../../init';

// Types
import { Days } from '../../types';

export function* fetchDays() {
    try {
        // ------------- SUCCESS BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isDaysFetching',
            value: true,
        }));

        const result: Days = yield call(async () => {
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
        });

        yield put(daysActions.setDays(result));
        // ------------- SUCCESS BLOCK END -------------
    } catch (error) {
        // ------------- ERROR BLOCK START -------------
        yield console.log('Error');

        const controlledError = error as IControlledError;
        yield put(errorsActions.setControlledError(controlledError));
        // ------------- ERROR BLOCK END -------------
    } finally {
        // ------------- FINALLY BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isDaysFetching',
            value: false,
        }));
        // ------------- FINALLY BLOCK END -------------
    }
}

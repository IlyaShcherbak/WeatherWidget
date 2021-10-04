// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchDays } from '../../bus/days/saga';

export function* rootSaga() {
    yield all([ watchDays() ]);
}

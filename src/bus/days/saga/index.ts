// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import { fetchDays } from './workers/fetchDays';

function* watchFetchDays(): SagaIterator {
    yield takeEvery(types.FETCH_DAYS_ASYNC, fetchDays);
}

export function* watchDays(): SagaIterator {
    yield all([ call(watchFetchDays) ]);
}

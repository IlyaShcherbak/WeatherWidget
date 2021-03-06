// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import stateFilter from '../../bus/client/stateFilter/slice';
import days from '../../bus/days/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        stateFilter,
        errors,
        days,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);

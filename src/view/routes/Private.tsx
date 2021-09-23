// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { WeatherWidget } from '../pages';

//Book
import { book } from './book';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(()=> {
        if (pathname.match(/login|register/)) {
            push('/');
        }
    });

    return (
        <Switch>
            {/* <Route
                exact
                path = { book.root }>
                <Main />
            </Route> */}
            <Route
                exact
                path = { book.weatherWidget }>
                <WeatherWidget />
            </Route>
            <Redirect to = { book.weatherWidget } />
        </Switch>
    );
};

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import Login from './routes/Login';
import Navigation from './components/Navigation';
import Register from './routes/Register';
import Home from './routes/Home';
import styled from 'styled-components';

type RoutesType = {
    [key: string]: {
        component: React.ComponentClass | React.SFC,
        exact: boolean,
        path: string,
    }
};

export const ROUTES: any = {
    home: {
        component: Home,
        exact: true,
        path: '/',
    },
    login: {
        component: Login,
        exact: true,
        path: '/login',
    },
    register: {
        component: Register,
        exact: true,
        path: '/register',
    },
};

const BodyContainer = styled.div`
    min-height: 90vh;
    > section {
        min-height: 90vh;
    } 
`;

const App = () => {
    return (
        <div>
            <Navigation/>
            <BodyContainer>
                <Switch>
                    {Object.keys(ROUTES).map((routeKey, index) => <Route key={index} {...ROUTES[routeKey]}/>)}
                </Switch>
            </BodyContainer>
            {/*<Footer/>*/}
        </div>
    );
};

export default App;

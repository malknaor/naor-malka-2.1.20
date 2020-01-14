import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomeContainer from './Containers/HomeContainer';
import asyncComponent from './common/AsyncComponent/AsyncComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.scss';

const FavoritesContainer = asyncComponent(() => import('./Containers/FavoritesContainer').then(module => module.default));

const App = props => {
    const {
        isDarkMode,
        isMetric,
        changeTheme,
        changeMetric
    } = props;

    const Home = () => {
        return (
            <ErrorBoundary innerComponent={true}>
                <HomeContainer />
            </ErrorBoundary>
        )
    }

    const Favorites = () => {
        return (
            <ErrorBoundary innerComponent={true}>
                <FavoritesContainer />
            </ErrorBoundary>
        )
    }
    return (
        <div className="app">
            <div className="app__header">
                <Navigation
                    isDarkMode={isDarkMode}
                    isMetric={isMetric}
                    changeTheme={changeTheme}
                    changeMetric={changeMetric}
                />
            </div>
            <div className="app__content">
                    <Switch>
                        <Redirect path='/' exact to='/home' />
                        <Route path='/home' component={Home} />
                        <Route path='/favorites' component={Favorites} />
                    </Switch>
            </div>
        </div>
    );
};

export default App;
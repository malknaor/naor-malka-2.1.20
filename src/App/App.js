import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomeContainer from './Home/HomeContainer';
import asyncComponent from './common/AsyncComponent';
import './App.scss';

const FavoritesContainer = asyncComponent(()=> import('./Favorites/FavoritesContainer').then(module => module.default));

const App = props => {
    const { themeMode, changeTheme, changeMetric } = props;

    return (
        <div className="app">
            <div className="app__header">
                <Navigation themeMode={themeMode} changeTheme={changeTheme} changeMetric={changeMetric} />
            </div>
            <div className="app__content">
                <Switch>
                    <Redirect path='/' exact to='/home' />
                    <Route path='/home' component={HomeContainer} />
                    <Route path='/favorites' component={FavoritesContainer} />
                </Switch>
            </div>
        </div>
    );
};

export default App;
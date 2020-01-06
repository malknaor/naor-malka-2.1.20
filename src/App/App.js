import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import './App.scss';

const App = props => {
    const { themeMode } = props;

    return (
        <div className="app">
            <div className="app__header">
                <Navigation themeMode={themeMode}/>
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
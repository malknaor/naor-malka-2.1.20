import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import './App.scss';

class App extends Component {
    render() {
        const { themeMode } = this.props;

        return (
            <div className={`app theme--${themeMode}`}>
                <div className="app__header">
                    <Navigation />
                </div>
                <div className="app__content">
                    <Switch>
                        <Redirect path='/' exact to='/home'/>
                        <Route path='/home' component={Home} />
                        <Route path='/favorites' component={Favorites} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
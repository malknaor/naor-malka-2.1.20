import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppContainer from './App/Containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './App/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ErrorBoundary>
                <AppContainer />
            </ErrorBoundary>
        </Router>
    </Provider>,
    document.querySelector('#root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RouterComponent from './components/Router';

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);

registerServiceWorker();

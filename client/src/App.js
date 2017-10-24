import React from 'react';
import './App.css';
import { render } from "react-dom";
import { Switch, Router, Route } from "react-router-dom";
import RouterComponent from "./components/Router";
import { CookiesProvider } from 'react-cookie';

// import AddPerson from './components/AddPerson';
// import Dashboard from './components/dashboard/Dashboard';
// import Home from './components/home/Home';
// import Login from './components/login/Login';


const App = () => (
    <CookiesProvider>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/person/add' component={AddPerson} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} /> */}
        <RouterComponent/>
    </CookiesProvider>
)

export default App;

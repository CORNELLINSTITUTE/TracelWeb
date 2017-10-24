import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link  
} from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import AddPerson from './person/AddPerson';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Home from './home/Home';

//Define the routing of the webpages
const routes = [
  {
    path: '/',
    exact: true,
    header: () => <Header />,
    content: () => <Home />,
    footer: () => <Footer />
  },
  {
    path: '/person/add',
    content: () => <AddPerson />,
  },
  {
    path: '/login',
    exact: true,
    
    content: () => <Login />
    
  },
  {
    path: '/dashboard',
    exact: true,
    header: () => <Header />,
    content: () => <Dashboard />,
    footer: () => <Footer />
  }

]

const RouterComponent = () => (
    <div>
      <div className="Header">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.header}
          />
        ))}
      </div>

      <div className="Content">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.content}
          />
        ))}
      </div>

      <div className="Footer">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.footer}
          />
        ))}
      </div>
    </div>
)

export default RouterComponent;

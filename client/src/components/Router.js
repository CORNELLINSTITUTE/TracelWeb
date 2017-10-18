import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './layout/Masterpage/Header';
import Footer from './layout/Masterpage/Footer';
import AddPerson from './AddPerson';
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
    header: () => <Header />,
    content: () => <AddPerson />,
    footer: () => <Footer />
  },
  {
    path: '/login',
    exact: true,
    header: () => <Header />,
    content: () => <Login />,
    footer: () => <Footer />
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
  <main>
  <Switch>
    <div>
      {/* HEADER */}
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.header}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.content}
          />
        ))}
      </div>

      {/* FOOTER */}
      <div>
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
  </Switch>
  </main>
)

export default RouterComponent

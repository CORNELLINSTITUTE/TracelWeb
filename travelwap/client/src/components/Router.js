import React from 'react'
import {Route} from 'react-router-dom';


import HeaderAdmin from './layout/HeaderAdmin';
import Admin from './admin/Admin';
import AdminFlight from './admin/flight/Flights';
import AdminFlightMain from './admin/flight/FlightsMain';
import AddFlights from './admin/flight/AddFlights';

import Header from './layout/Header';
import Footer from './layout/Footer';
import AddPerson from './person/AddPerson';
import Login from './login/Login';
import Home from './home/Home';
import Profile from './profile/Profile';
import Hotel from './hotel/Hotel';
import Car from './car/Car';
import SearchFlights from './flight/SearchFlights';
import SearchFlightDetail from './flight/SearchFlightDetail';
import SearchFlightItemListDetail from './flight/SearchFlightItemListDetail';

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
    path: '/SearchFlight',
    exact: true,
    header: () => <Header />,
    content: () => <SearchFlights />,
    footer: () => <Footer />
  },
  {
    path: '/SearchFlightDetail/:name/:image',
    exact: true,
    header: () => <Header />,
    content: (props) => <SearchFlightDetail  {...props}/>,
    footer: () => <Footer />
  },
  {
    path: '/SearchFlightItemListDetail',
    exact: true,
    header: () => <Header />,
    content: (props) => <SearchFlightItemListDetail  {...props}/>,
    footer: () => <Footer />
  },
  {
    path: '/hotel',
    exact: true,
    header: () => <Header />,
    content: () => <Hotel />,
    footer: () => <Footer />
  },
  {
    path: '/car',
    exact: true,
    header: () => <Header />,
    content: () => <Car />,
    footer: () => <Footer />
  },
  {
    path:'/profile',
    exact: true,
    content: () => <Profile/>
  },
  /************************/
  // ADMIN
  /************************/
  {
    path:'/admin',
    exact:true,
    header: () => <HeaderAdmin/>,
    content: () => <Admin />
  },
  {
    path: '/adminFlight',
    exact:true,
    content: () => <AdminFlight/>
  },
  {
    path: "/adminFlight/main",
    exact:true,
    content: () => <AdminFlightMain/>
  },
  {
    path: '/adminFlight/add',
    exact:true,
    content: () => <AddFlights/>
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

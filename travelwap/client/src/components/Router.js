import React from 'react'
import {Route} from 'react-router-dom';


import HeaderAdmin from './layout/HeaderAdmin';
import Admin from './admin/Admin';
import AdminFlight from './admin/flight/Flights';
import AdminFlightMain from './admin/flight/FlightsMain';
import AddFlights from './admin/flight/AddFlights';
import AdminHotelsHeader from './admin/hotel/HotelsHeader';
import AdminHotelMain from './admin/hotel/HotelsMain';
import AdminHotelDetails from './admin/hotel/HotelDetails';
import AdminAddHotels from './admin/hotel/AddHotels';


import Header from './layout/Header';
import Footer from './layout/Footer';
import AddPerson from './person/AddPerson';
import Login from './login/Login';
import Home from './home/Home';
import Profile from './profile/Profile';
import SearchFlights from './flight/SearchFlights';
import SearchFlightDetail from './flight/SearchFlightDetail';
import SearchFlightItemListDetail from './flight/SearchFlightItemListDetail';
import SearchHotels from './hotel/SearchHotels';
import SearchHotelDetail from './hotel/SearchHotelDetail';
import SearchHotelItemListDetail from './hotel/SearchHotelItemListDetail';

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
    path: '/SearchHotel',
    exact: true,
    header: () => <Header />,
    content: () => <SearchHotels />,
    footer: () => <Footer />
  },
  {
    path: '/SearchHotelDetail/:name/:image',
    exact: true,
    header: () => <Header />,
    content: (props) => <SearchHotelDetail  {...props}/>,
    footer: () => <Footer />
  },
  {
    path: '/SearchHotelItemListDetail',
    exact: true,
    header: () => <Header />,
    content: (props) => <SearchHotelItemListDetail  {...props}/>,
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
  /************************/
  // ADMIN FLIGHT
  /************************/
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
  },
   /************************/
  // ADMIN HOTEL
  /************************/
  {
    path: "/adminHotel/",
    exact:true,
    header: () => <AdminHotelsHeader/>,
    content: () => <AdminHotelMain/>
  },
  {
    path: '/adminHotel/add',
    exact:true,
    header: () => <AdminHotelsHeader/>,
    content: () => <AdminAddHotels/>
  },
  {
    path: '/adminHotel/details/:id',
    exact:true,
    header: () => <AdminHotelsHeader/>,
    content: (props) => <AdminHotelDetails {...props}/>
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

import React, { Fragment, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import TopMenu from './components/TopMenu/TopMenu';
import Spa from './pages/Spa/Spa';
import Restaurant from './pages/Restaurant/Restaurant';
import Tour from './pages/Tour/Tour';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import store from './store';
import { Provider } from 'react-redux';
import Register from './pages/Register/Register';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import PrivateRoute from './components/routing/PrivateRoute';
import Admin from './pages/Admin/Admin';
import BookNow from './pages/BookNow/BookNow';
import Rooms from './pages/Rooms/Rooms';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import CustomerManage from './pages/Admin/CustomerManage/CustomerManage';
import Notify from './components/Notify/Notify';
import OrderRooms from './pages/Admin/Order/OrderRooms';
import RoomManagement from './pages/Admin/RoomManagement/RoomManagement';
import Statistical from './pages/Admin/Statistical/Statistical';
import CheckOut from './pages/Admin/CheckOut/CheckOut';
const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <TopMenu />
          <Notify />
          <Menu />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tours' exact component={Tour} />
            <Route path='/restaurant' exact component={Restaurant} />
            <Route path='/spa' exact component={Spa} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/booknow' exact component={BookNow} />
            <Route path='/rooms' exact component={Rooms} />
            <Route path='/roomdetail/:id' exact component={RoomDetail} />
            <PrivateRoute
              path='/customermanagement'
              exact
              component={CustomerManage}
            />
            <PrivateRoute exact path='/admin' component={Admin} />
            <PrivateRoute path='/roomrented' exact component={OrderRooms} />
            <PrivateRoute path='/roommanage' component={RoomManagement} />
            <PrivateRoute path='/checkout' component={CheckOut} />
            <PrivateRoute path='/statistical' exact component={Statistical} />
            <PrivateRoute path='' exact component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

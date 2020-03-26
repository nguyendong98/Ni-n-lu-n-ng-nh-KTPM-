import React, { Fragment, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import TopMenu from './components/TopMenu/TopMenu';
import Spa from './pages/Spa/Spa';
import Restaurant from './pages/Restaurant/Restaurant';
import Tour from './pages/Tour/Tour';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login'
import store from './store';
import {Provider} from 'react-redux';
import Register from './pages/Register/Register';
import setAuthToken from './utils/setAuthToken'
import {loadUser} from './actions/auth'
import PrivateRoute from './components/routing/PrivateRoute';
import Admin from './pages/Admin/Admin';
import BookNow from './pages/BookNow/BookNow';
import Rooms from './pages/Rooms/Rooms';
const App = () => {
  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
      store.dispatch(loadUser())
    }
    
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <TopMenu />
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tours" exact component={Tour} />
            <Route path="/restaurant" exact component={Restaurant} />
            <Route path="/spa" exact component={Spa} />
            <Route path= "/login" exact component ={Login} />
            <Route path= "/register" exact component ={Register} />
            <Route path= "/booknow" exact component={BookNow}/>
            <Route path= "/rooms" exact component={Rooms}/>
            <PrivateRoute exact path="/admin"  component={Admin} />
            <Route path="" exact component={NotFound} />              
          </Switch>            
          <Footer />            
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;


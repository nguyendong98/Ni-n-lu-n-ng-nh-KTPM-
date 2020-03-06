import React, { Component } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import routes from './route';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import TopMenu from './components/TopMenu/TopMenu';

class App extends Component {
  showRoute = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((val, index) => {
        return (
          <Route 
             key={index} 
             path={val.path} 
             exact={val.exact} 
             component={val.main}
          />   
        )
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <div>
          <TopMenu />
          <Menu />
          <Switch>
            {this.showRoute(routes)}
          </Switch>
          
          <Footer />
          
        </div>
      </Router>
      
    );
  }
}

export default App;


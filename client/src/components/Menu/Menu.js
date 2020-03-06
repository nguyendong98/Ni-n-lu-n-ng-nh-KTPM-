import React, { Component } from 'react';
import './Menu.scss';
import {    
    
    Link    
  } from "react-router-dom";
class Menu extends Component {
    render() {
        return (
            <section className="main-menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link to="/" exact="true"> <img src="https://previews.123rf.com/images/mehibi/mehibi1508/mehibi150801290/44126325-hotel-logo-template.jpg" style={{width: '6rem', height: '6rem'}} alt="logo"/></Link>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav" style={{margin: '0 auto'}}>
<<<<<<< HEAD
                                <Link to="/" exact="true" className="nav-item nav-link " href="#/"><i className="fa fa-home"  />Home</Link>
                                <a className="nav-item nav-link " href="#/"><i className="fa fa-bed"  />Room</a>
=======
                                <a className="nav-item nav-link " href="//"><i className="fa fa-home"  />Home</a>
                                <a className="nav-item nav-link " href="//"><i className="fa fa-bed"  />Room</a>
>>>>>>> 8fac2552502a67ac1b8eaac21afe8450db8e9c0f
                                <li className="dropdown " id="navbarNavDropdown">
                                    <a className="nav-item nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-glass" aria-hidden="true" />
                                        Service
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link to="/Tours" exact="true" className="dropdown-item" href>Tours info</Link>
                                        <Link to="/Spa"  className="dropdown-item" href>Spa</Link>
                                        <Link to="/Restaurant" className="dropdown-item" href>Restaurant</Link>
                                    </div>
                                </li>
                                <a className="nav-item nav-link " href="/"><i className="fa fa-camera-retro"
                                        aria-hidden="true" />Gallery</a>
                                <a className="nav-item nav-link " href="/"><i className="fa fa-gift"
                                        aria-hidden="true" />Promotion</a>
                                <a className="nav-item nav-link " href="/"><i className="fa fa-bell" aria-hidden="true" />Book
                                    Now</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}

export default Menu;
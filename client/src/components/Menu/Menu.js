import React, { Component } from 'react';
import './Menu.scss';
import { Link, NavLink } from 'react-router-dom';
class Menu extends Component {
  render() {
    return (
      <section className='main-menu'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light '>
            <Link to='/' exact="true">
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlKoNFjSRZhti9Mo2F-jeMuYbwp-qROryOF_5T0H242IOloTa6'
                style={{ width: '7rem', height: '7rem' }}
                alt='logo'
              />
            </Link>

            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <div className='navbar-nav navbar-item'>
                <NavLink
                  to='/'
                  exact={true}
                  className='nav-item nav-link '
                  
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#6b6b6b"
                  }}
                >
                  <i className='fa fa-home' aria-hidden='true' />
                  Home
                </NavLink>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-bed' aria-hidden='true' />
                  Room
                </a>
                <li className='dropdown ' id='navbarNavDropdown'>
                  <NavLink 
                    className='nav-item nav-link dropdown-toggle'
                    to='/Tours'
                    id='navbarDropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#6b6b6b"
                    }}
                  >
                    <i className='fa fa-glass' aria-hidden='true' />
                    Service
                    
                  </NavLink>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <NavLink
                      to='/Tours'
                      exact={true}
                      className='dropdown-item'
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#6b6b6b"
                      }}
                    >
                      Tours info
                    </NavLink>
                    <NavLink exact={true} to='/Spa' className='dropdown-item' href='/'
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#6b6b6b"
                    }}>
                      Spa
                    </NavLink>
                    <NavLink exact={true} to='/Restaurant' className='dropdown-item' href='/'
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#6b6b6b"
                    }}>
                      Restaurant
                    </NavLink>
                  </div>
                </li>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-camera-retro' />
                  Gallery
                </a>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-gift'  />
                  Promotion
                </a>
                <NavLink to="/booknow" exact={true} className='nav-item nav-link '
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#6b6b6b"
                  }} >
                  <i className='fa fa-bell'   />
                  Book Now
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Menu;

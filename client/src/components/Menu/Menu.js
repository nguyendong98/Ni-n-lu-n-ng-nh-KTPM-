import React from 'react';
import './Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {setNotify} from './../../actions/notify'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
const Menu = ({setNotify, isAuthenticated}) => {
  const checkAuth = (e) => {
    if(!isAuthenticated){
      e.preventDefault()
      setNotify('Please login if you want to book now !!!', 1500)
      return <Redirect to="/login" exact />
    }
    else{
      return <Redirect to="/booknow" exact />
    }
  }
  
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
                <NavLink className='nav-item nav-link ' to="/rooms" activeStyle={{
                      fontWeight: "bold",
                      color: "#6b6b6b"
                    }}>
                  <i className='fa fa-bed'   />
                  Rooms
                </NavLink>
                <li className='dropdown ' id='navbarNavDropdown'>
                  <NavLink 
                    className='nav-item nav-link dropdown-toggle'
                    to='/tours'
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
                    className='dropdown-menu navbar-drop'
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <NavLink
                      to='/tours'
                      exact={true}
                      className='dropdown-item'
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#6b6b6b"
                      }}
                    >
                      Tours info
                    </NavLink>
                    <NavLink exact={true} to='/spa' className='dropdown-item' href='/'
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#6b6b6b"
                    }}>
                      Spa
                    </NavLink>
                    <NavLink exact={true} to='/restaurant' className='dropdown-item' href='/'
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
                  onClick={(e) => checkAuth(e)}
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
Menu.propTypes = {
  setNotify: PropTypes.func.isRequired
  
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    
  }
}
export default connect(mapStateToProps, {setNotify})(Menu)

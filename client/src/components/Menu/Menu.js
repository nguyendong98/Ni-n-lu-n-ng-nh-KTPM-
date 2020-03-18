import React, { Component } from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
class Menu extends Component {
  render() {
    return (
      <section className='main-menu'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light '>
            <Link to='/' exact='true'>
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
                <Link
                  to='/'
                  exact='true'
                  className='nav-item nav-link '
                  href='/'
                >
                  <i className='fa fa-home' aria-hidden='true' />
                  Home
                </Link>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-bed' aria-hidden='true' />
                  Room
                </a>
                <li className='dropdown ' id='navbarNavDropdown'>
                  <a
                    className='nav-item nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fa fa-glass' aria-hidden='true' />
                    Service
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <Link
                      to='/Tours'
                      exact='true'
                      className='dropdown-item'
                      href='/'
                    >
                      Tours info
                    </Link>
                    <Link to='/Spa' className='dropdown-item' href='/'>
                      Spa
                    </Link>
                    <Link to='Restaurant' className='dropdown-item' href='/'>
                      Restaurant
                    </Link>
                  </div>
                </li>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-camera-retro' aria-hidden='true' />
                  Gallery
                </a>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-gift' aria-hidden='true' />
                  Promotion
                </a>
                <a className='nav-item nav-link ' href='/'>
                  <i className='fa fa-bell' aria-hidden='true' />
                  Book Now
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Menu;

import React, {Fragment} from 'react';
import './TopMenu.scss';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './../../actions/auth'
const TopMenu = ({auth, logout}) => {
  const authLink = (
    <div className='login'>
        <a href="#/" onClick={logout}><i className="fa fa-sign-out" ></i> Logout</a>
     </div>   
  )
  const guestLink = (
    <div className='login'>
        <Link to='/login' className='login-btn'>
          Đăng nhập/đăng ký
        </Link>
    </div>
  )
  return (
    <section className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light head__title'>
        <div className='container'>
          <div
            className='collapse navbar-collapse'
            id='navbarNavAltMarkup text-center'
          >
            <div className='navbar-nav head__title-left'>
              <a className='nav-item nav-link' href='/'>
                Niên luận
              </a>
              <a className='nav-item nav-link' href='/' id='a-phone'>
                <i className='fa fa-phone' aria-hidden='true' />
                0783.777.999
              </a>
              <a className='nav-item nav-link' href='/' id='a-mail'>
                <i className='fa fa-envelope-o' aria-hidden='true' />
                nlnhom3@gmail.com
              </a>
            </div>
            <div className='navbar-nav text-center head__title-right'>
              <a className='nav-item nav-link' href='facebook.com'>
                <i className='fa fa-facebook' aria-hidden='true'></i>.
              </a>
              <a className='nav-item nav-link' href='twitter.com'>
                <i className='fa fa-twitter' aria-hidden='true'></i>.
              </a>
              <a className='nav-item nav-link' href='instagram.com'>
                <i className='fa fa-instagram' aria-hidden='true'></i>.
              </a>
              <a className='nav-item nav-link' href='youtube.com'>
                <i className='fa fa-youtube' aria-hidden='true'></i>.
              </a>
            </div>
          </div>
        </div>
      </nav>
      { (<Fragment>{auth.isAuthenticated ? authLink : guestLink}</Fragment>)}
    </section>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, {logout})(TopMenu)
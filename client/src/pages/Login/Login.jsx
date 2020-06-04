import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './../../actions/auth';
import './Login.scss';
import PropsType from 'prop-types';
import jwtDecode from 'jwt-decode';
import Alert from '../../components/Alert/Alert';
import loginImages from './../../images/authenticated.svg'
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // console.log(formData)
    login({
      email,
      password
    });
  };
  if (isAuthenticated) {
    const decoded = jwtDecode(localStorage.getItem('token'))
    // console.log(decoded)
    if(decoded.user.role === "admin")
    return <Redirect to='/admin' />;
    else if(decoded.user.role === "user") return <Redirect to = "/" />
  }
  return (
    <section className='login'>
      <div className='container d-flex justify-content-center'>
        <img src={loginImages} alt="loginImages" className="login__images"></img>
        <div className='login-content'>
          
          <div className='login-title'>
            <h1 className='large'>Sign In</h1>
            <p className='lead'>
              <i className='fa fa-user'></i> Sign into Your Account
            </p>
          </div>
          <form
            className='form'
            action='dashboard.html'
            onSubmit={e => onSubmit(e)}
          >
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email address'
                onChange={e => onChange(e)}
                name='email'
                value={email}
                className="form-control font-secondary"
              />
              <small id="emailHelp" className="form-text text-muted text-left">Email addmin: admin@gmail.com</small>
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                onChange={e => onChange(e)}
                name='password'
                value={password}
                className="form-control font-secondary"
              />
              <small id="emailHelp" className="form-text text-muted text-left">Password addmin: pwadmin@gmail.com</small>
            </div>
            <div className='form-group'>
              <input
                type='submit'
                className=' btn-submit  mt-5'
                value='Login'
                
              />
            </div>
          </form>
          <p >
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
          <Alert />
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    
  };
};
Login.PropsType = {
  login: PropsType.func.isRequired,
  isAuthenticated: PropsType.bool.isRequired
  
};
export default connect(mapStateToProps, { login })(Login);

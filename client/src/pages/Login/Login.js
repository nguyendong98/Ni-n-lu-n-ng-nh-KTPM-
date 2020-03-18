import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './../../actions/auth';
import './Login.scss';
import PropsType from 'prop-types';

import Alert from '../../components/Alert/Alert';
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
    return <Redirect to='/admin' />;
  }
  return (
    <section className='login'>
      <div className='container'>
        <div className='login-content'>
          <Alert />
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
                placeholder='Email Address'
                onChange={e => onChange(e)}
                name='email'
                value={email}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                onChange={e => onChange(e)}
                name='password'
                value={password}
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                className='btn btn-primary btn-submit'
                value='Login'
              />
            </div>
          </form>
          <p >
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
Login.PropsType = {
  login: PropsType.func.isRequired,
  isAuthenticated: PropsType.bool
};
export default connect(mapStateToProps, { login })(Login);

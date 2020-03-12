import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {setAlert} from './../../actions/alert';
import {register} from './../../actions/auth';
import PropsType from 'prop-types'
import './Register.scss'
import Alert from '../../components/Alert/Alert';
const Register = ({setAlert, register, isAuthenticated, history}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });    
    // console.log(history)
    const {name, email, password, password2} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    // console.log(name, email, password, password2)
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'danger')
        }else{
            register({name, email, password})
            
            

        }

    }
    if(isAuthenticated){
        return <Redirect to="/"></Redirect>
    }
    return (        
            
            <section className = "register m-5">
                <div className="container">
                    <Alert></Alert>
                    <h1 className="large text-primary">Sign Up</h1>
                    <p className="lead"><i className="fa fa-user"></i> Create Your Account</p>
                    <form className="form" action="create-profile.html" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
                            <small className="form-text">This site uses Gravatar so if you want a profile image, use a
                                Gravatar email</small>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" name="password"  value={password} onChange={e => onChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Confirm Password" name="password2"  value={password2} onChange={e => onChange(e)} />
                        </div>
                        <input type="submit" className="btn btn-primary px-4 py-3" value="Register" />
                    </form>
                    <p className="my-1">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </div>
                
            </section>
            
        
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

Register.PropsType = {
    setAlert: PropsType.func.isRequired,
    register: PropsType.func.isRequired,
    isAuthenticated: PropsType.bool
    
}
export default connect(mapStateToProps, {setAlert, register})(Register)

import axios from 'axios';
import {setAlert } from './alert'
import {setNotify} from './notify'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GETALL_USER,
    DELETE_CUSTOMER,

    
} from './types'
import setAuthToken from './../utils/setAuthToken'
//Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
      const res = await axios.get('/api/auth');
  
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  //delete customer
  export const deleteCustomer = (id) => async dispatch => {
      if(window.confirm('Are you sure. This can NOT be undone!!')){
        try {
            await axios.delete(`/api/users/${id}`)
            dispatch({
                type: DELETE_CUSTOMER,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
      }
     
  }



//Regiter User
export const register = ({name, email, password, history}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password })
    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert('Register Success', 'success'))
        history.push('/login')
        // window.history.go(-1)
    } catch (error) {
        const errors = error.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

//Login
export const login = ({email, password}) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({  email, password })
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(setNotify('Welcome you to Royal Hotel'))
        dispatch(loadUser());
        
    } catch (error) {
        const errors = error.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: LOGIN_FAIL
        })
        
}
}

//Logout

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
    dispatch(setNotify('Bye mày and see mày again!!'))
}

//get all user
export const getAllUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/users');
        dispatch({
            type: GETALL_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
    
}
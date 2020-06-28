import axios from 'axios';
import { setAlert } from './alert';
import { CHECK_OUT } from './types';

export const CheckOut = (id) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/bill/checkout/${id}`);
    dispatch({
      type: CHECK_OUT,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

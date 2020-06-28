import axios from 'axios';
import { setAlert } from './alert';
import { GET_BILL_BY_ID, CHECK_OUT, GET_ALL_BILLS } from './types';

export const checkOut = (id) => async (dispatch) => {
  try {
    await axios.post(`/api/bill/checkout/${id}`);
    const res = await axios.put(`/api/bill/checkout/${id}`);
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
export const getAllBill = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/bill`);
    dispatch({
      type: GET_ALL_BILLS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.errors);
  }
};
export const getBillById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/bill/${id}`);
    dispatch({
      type: GET_BILL_BY_ID,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.errors);
  }
};

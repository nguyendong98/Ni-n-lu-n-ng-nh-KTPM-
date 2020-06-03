import axios from 'axios';
// import {setAlert} from './alert'
import {
  ROOM_LOADED,
  ROOM_ERROR,
  BOOK_ROOM,
  GET_ROOM_DETAIL,
  GET_ROOM_RENTED,
  ACCEPT_ORDER_ROOM,
  GET_ALL_ROOM,
  DELETE_ROOMRENTED_BY_ID,
  DELETE_ALL_ROOMRENTED
} from './types';
import { setAlert } from './alert';
import { setNotify } from './notify';
export const getAllKindOfRoom = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/kindofrooms');
    const res1 = await axios.get('/api/rooms');
    dispatch({
      type: ROOM_LOADED,
      payload: { rooms: res.data, allroom: res1.data },
    });
  } catch (error) {
    dispatch({
      type: ROOM_ERROR,
      payload: error.data,
    });
  }
};

export const getAllRoom = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/kindofrooms');
    const res1 = await axios.get('/api/rooms');
    dispatch({
      type: GET_ALL_ROOM,
      payload: { category: res.data, allroom: res1.data }
    });
  } catch (error) {
    dispatch({
      type: ROOM_ERROR,
      payload: error.data,
    });
  }
};

export const getKindOfRoomDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/kindofrooms/${id}`);
    dispatch({
      type: GET_ROOM_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ROOM_ERROR,
      payload: error.data,
    });
  }
};

export const bookRoom = (formData) => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(formData);
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      const res = await axios.post('/api/roomrented', body, config);
      dispatch({
        type: BOOK_ROOM,
        payload: res.data,
      });
      dispatch(setAlert('Book Success', 'success'));
      dispatch(setNotify('Book Success, See you soonest'));
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  }
};

export const getAllRoomRent = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/roomrented');
    dispatch({
      type: GET_ROOM_RENTED,
      payload: res.data,
    });
  } catch (error) {}
};

export const acceptOrderRoom = (id) => async (dispatch) => {
  try {
    await axios.put(`api/admin/roomrented/${id}`);
    const res1 = await axios.get('/api/roomrented');
    dispatch({
      type: ACCEPT_ORDER_ROOM,
      payload: res1.data,    });


  } catch (error) {}
};

export const deleteRoomRentedById = id => async dispatch => {
  try {
    await axios.delete(`/api/admin/roomrented/${id}`)
    dispatch({
      type: DELETE_ROOMRENTED_BY_ID,
      payload: id
    })
  } catch (e) {
    console.log(e)
  }
}
export const deleteAllRoomRented = () => async  dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/admin/roomrented')
      dispatch({
        type: DELETE_ALL_ROOMRENTED
      })
    } catch (e) {
      console.log(e)
    }
  }
}

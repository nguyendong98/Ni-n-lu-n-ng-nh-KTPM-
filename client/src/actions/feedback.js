import axios from 'axios';
import { setAlert } from './alert';
import { CREATE_COMMENT, GET_ALL_COMMENT } from './types';

export const createComment = (data, id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(`/api/feedback/${id}`, body, config);
    dispatch({
      type: CREATE_COMMENT,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getAllComment = () => async (dispatch) =>{
  try {
    const res = await axios.get('/api/feedback');
    dispatch({
      type: GET_ALL_COMMENT,
      payload: res.data,
    });
  } catch (error) {}
}

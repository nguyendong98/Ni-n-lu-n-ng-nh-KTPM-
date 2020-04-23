import uuid from 'uuid';
import {SET_NOTIFY, REMOVE_NOTIFY} from './types';

export const setNotify = (msg, timeOut = 3500) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_NOTIFY,
        payload: { msg,  id}
    })
    setTimeout(() => dispatch({type: REMOVE_NOTIFY, payload: id}), timeOut)
}
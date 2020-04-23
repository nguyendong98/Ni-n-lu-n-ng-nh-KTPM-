import axios from 'axios'
// import {setAlert} from './alert'
import {ROOM_LOADED, ROOM_ERROR, BOOK_ROOM
} from './types'
import {setAlert} from './alert'
import {setNotify} from './notify'
export const getAllKindOfRoom =  () => async dispatch => {
    try {
        const res = await axios.get('/api/kindofrooms');
        const res1 = await axios.get('/api/rooms');
        dispatch({
            type: ROOM_LOADED,
            payload: {rooms: res.data, allroom: res1.data}
        })
    } catch (error) {
        dispatch({
            type: ROOM_ERROR,
            payload: error.data
        })
    }
    
}

export const bookRoom = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }        
    }
    const body = JSON.stringify(formData)
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            const res = await axios.post('/api/roomrented', body, config)
            dispatch({
                type: BOOK_ROOM,
                payload: res.data
            })
            dispatch(setAlert('Book Success', 'success'))
            dispatch(setNotify('Book Success, See you soonest'))
        } catch (error) {
            const errors = error.response.data.errors;

            if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
        }
    }
} 
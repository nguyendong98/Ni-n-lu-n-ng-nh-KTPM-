import axios from 'axios'
// import {setAlert} from './alert'
import {ROOM_LOADED, ROOM_ERROR, ALLROOM_LOADED} from './types'
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
export const getAllRoom = () => async dispatch => {
    try {
        const res = await axios.get('/api/rooms')
        dispatch({
            type: ALLROOM_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ROOM_ERROR,
            payload: error.data
        })
    }
}
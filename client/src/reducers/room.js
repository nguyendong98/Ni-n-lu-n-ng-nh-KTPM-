import {
    ROOM_LOADED,
    ROOM_ERROR,
    
} from './../actions/types'
const InitialState = {
    rooms: [],
    room: null,
    allroom: [],
    loading: true,
    error: {}

}
const room = (state = InitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ROOM_LOADED:
            console.log(payload)
            return {
                ...state,
                rooms: payload.rooms,
                allroom: payload.allroom,
                loading: false
            }
           
        case ROOM_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}
export default room
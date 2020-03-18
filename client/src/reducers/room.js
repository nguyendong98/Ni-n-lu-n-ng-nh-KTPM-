import {
    ROOM_LOADED,
    ROOM_ERROR
} from './../actions/types'
const InitialState = {
    rooms: [],
    room: null,
    loading: true,
    error: {}

}
const room = (state = InitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ROOM_LOADED:
            return {
                ...state,
                rooms: payload,
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
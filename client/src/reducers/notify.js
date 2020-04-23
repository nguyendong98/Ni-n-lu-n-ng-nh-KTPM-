import {SET_NOTIFY, REMOVE_NOTIFY} from '../actions/types'
const InitialState = []
const notify = (state = InitialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_NOTIFY:
            // console.log(action)
            return [...state, payload]
        case REMOVE_NOTIFY:
            
            return  state.filter(alert => alert.id !== payload)
        default:
            return state;    
    }
}
export default notify
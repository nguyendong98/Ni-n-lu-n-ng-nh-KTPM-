import {
  ROOM_LOADED,
  ROOM_ERROR,
  BOOK_ROOM,
  GET_ROOM_DETAIL,
} from './../actions/types';
const InitialState = {
  rooms: [],
  room: null,
  allroom: [],
  loading: true,
  error: {},
  roomrented: null,
};
const room = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROOM_LOADED:
      return {
        ...state,
        rooms: payload.rooms,
        allroom: payload.allroom,
        loading: false,
      };
    case ROOM_ERROR:
      return {
        ...state,
        error: payload,
      };
    case BOOK_ROOM:
      return {
        ...state,
        roomrented: payload,
      };
    case GET_ROOM_DETAIL:
      return {
        ...state,
        room: payload,
        loading: false
      };
    default:
      return state;
  }
};
export default room;

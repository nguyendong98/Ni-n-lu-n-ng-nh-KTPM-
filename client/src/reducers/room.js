import {
  ROOM_LOADED,
  ROOM_ERROR,
  BOOK_ROOM,
  GET_ROOM_DETAIL,
  GET_ROOM_RENTED,
  ACCEPT_ORDER_ROOM,
  DELETE_ROOMRENTED_BY_ID,
  DELETE_ALL_ROOMRENTED
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
        loading: false,
      };
    case GET_ROOM_RENTED:
      return {
        ...state,
        roomrented: payload,
        loading: false,
      };
    case ACCEPT_ORDER_ROOM:
      return {
        ...state,
        roomrented: payload,
      };
    case DELETE_ROOMRENTED_BY_ID:
      return {
        ...state,
        roomrented: state.roomrented.filter(val => val._id !== payload)
      }
    case DELETE_ALL_ROOMRENTED:
      return {
        ...state,
        roomrented: []
      }

    default:
      return state;
  }
};
export default room;

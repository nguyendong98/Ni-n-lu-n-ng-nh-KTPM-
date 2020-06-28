import { CHECK_OUT, GET_ALL_BILLS } from './../actions/types';

const InitialState = {
  bills: [],
  bill: null,
  loading: true,
  error: {},
};

const bill = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BILLS: {
      return {
        ...state,
        bills: payload,
      };
    }
    case CHECK_OUT: {
        return {
          ...state,
          bills: payload,
        };
      }
    default:
      return state;
  }
};
export default bill;

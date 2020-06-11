import { CREATE_COMMENT, GET_ALL_COMMENT } from './../actions/types';

const InitialState = {
  feedbacks: [],
  feedback: null,
  loading: true,
  error: {},
};

const feedback = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_COMMENT: {
      return {
        ...state,
        feedback: state.feedbacks.push(payload),
      };
    }
    case GET_ALL_COMMENT: {
      return {
        ...state,
        feedbacks: payload,
      };
    }
    default:
      return state;
  }
};
export default feedback;

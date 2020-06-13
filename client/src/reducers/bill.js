import { GET_BILL_BY_ID } from './../actions/types';

const InitialState = {
    billDetail: null,
    loading: true,
    error: {},
};

const bill = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_BILL_BY_ID: {
            return {
                ...state,
                billDetail: payload,
            };
        }

        default:
            return state;
    }
};
export default bill;

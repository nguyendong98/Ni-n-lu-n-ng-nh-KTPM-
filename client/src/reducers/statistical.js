import {STATISTICAL_NATIONALITY, STATISTICAL_NATIONALITY_DETAIL, STATISTICAL_REVENUE} from './../actions/types';

const InitialState = {
    nationality: null,
    nationality_detail: null,
    revenue: null,
    loading: true,
    error: {},
};

const statistical = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case STATISTICAL_NATIONALITY: {
            console.log(payload)
            return {
                ...state,
                loading: false,
                nationality: payload,
            };
        }
        case STATISTICAL_NATIONALITY_DETAIL: {
            return {
                ...state,
                loading: false,
                nationality_detail : payload
            }
        }
        case STATISTICAL_REVENUE: {
            return {
                ...state,
                loading: false,
                revenue: payload
            }
        }
        default:
            return state;
    }
};
export default statistical;

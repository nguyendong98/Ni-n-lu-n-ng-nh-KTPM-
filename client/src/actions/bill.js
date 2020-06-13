import axios from 'axios'
import { GET_BILL_BY_ID } from './types'

export const getBillById = id => async dispatch => {
    try {
        const res = await axios.get(`/api/bill/${id}`)
        dispatch({
            type: GET_BILL_BY_ID,
            payload: res.data
        })
    } catch (e) {
        console.log(e.errors)
    }
}

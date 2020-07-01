import axios from 'axios'
import {STATISTICAL_NATIONALITY, STATISTICAL_NATIONALITY_DETAIL, STATISTICAL_REVENUE} from "./types";

// thống kê nationality
export const statisticalNationality = () => async dispatch => {
    try {
        const res = await axios.get('/api/admin/statistical/nationality')
        dispatch({
            type: STATISTICAL_NATIONALITY,
            payload: res.data
        })

    } catch (e) {
        console.error(e.message)
    }
}

export const statisticalRevenue = year => async  dispatch => {
    try {
        const res = await axios.get(`/api/admin/statistical/nationality/${year}`)
        console.log(res)
        dispatch({
            type: STATISTICAL_NATIONALITY_DETAIL,
            payload: res.data
        })
        console.log(res)
    } catch (e) {
        console.error(e.message)
    }
}

export const statisticalNationalityDetail = year => async  dispatch => {
    try {
        const res = await axios.get(`/api/admin/statistical/revenue/${year}`)
        console.log(res)
        dispatch({
            type: STATISTICAL_REVENUE,
            payload: res.data
        })
        console.log(res)
    } catch (e) {
        console.error(e.message)
    }
}

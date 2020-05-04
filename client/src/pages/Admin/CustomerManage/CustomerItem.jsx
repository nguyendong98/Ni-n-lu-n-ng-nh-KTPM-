import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteCustomer} from '../../../actions/auth'
import Moment from 'react-moment'
const CustomerItem = ({customer, index, deleteCustomer}) => {
    
    return (

        <Fragment>
            <tr style={{height: "10rem", lineHeight: "10rem"}}>
                <th><input type="checkbox" className="option-input checkbox"    /></th>
                <th scope="row">{index+1}</th>
                <td className="customer-td">{customer.name}</td>
                <td className="customer-td">{customer.email}</td>
                <td className="customer-td "><img src={customer.avatar} alt="img" style={{width:"7rem", height: "7rem", borderRadius: '50%'}}/></td>
                <td className="customer-td"><Moment format="MM/DD/YYYY">{customer.date}</Moment></td>
                <td className="customer-td "><button className="btn-handle btn"  onClick={() => deleteCustomer(customer._id)}>Delete</button></td>
            </tr>
        </Fragment>
    )
}

CustomerItem.propTypes = {
    customer: PropTypes.object.isRequired
}

export default connect(null, {deleteCustomer})(CustomerItem)

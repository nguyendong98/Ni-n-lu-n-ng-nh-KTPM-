import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './CustomerManage.scss'
import {connect} from 'react-redux'
import {getAllUser} from '../../../actions/auth'
import Spinner from '../../../components/Spinner/Spinner'
import {Link} from 'react-router-dom'
import CustomerItem from './CustomerItem'

const CustomerManage = ({getAllUser, auth:{loading, users}}) => {    
    useEffect(() => {
        getAllUser()
    }, [getAllUser])
    const [filter, setFilter] = useState('')    
    var customers = users.filter(val => val.role === "user")
    const totalCustomer = users.filter(val => val.role === "user").length
    const onFilter = e => {
        setFilter(e.target.value)
    }
    customers = customers.filter(val => (val.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
                                            || (val.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    )
    
    return  (loading || users === []) ? (<Spinner />) :
    (
        <section className="customermnm">
            <h2 className="customermnm__title">Customer Management</h2>
            <div className="customermnm__menu">
                <span><Link to="/admin" exact="true" style={{color: "black"}}>Admin</Link></span>
                <i className="fa fa-chevron-right" ></i>
                <span className="customermnm__menu-home">Customers</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="customermnm__header d-flex justify-content-between align-items-center">
                        <div className="customermnm__header-total ">
                            <span>$Total: {totalCustomer}</span>
                            
                            <button className="btn-handle btn-delete ml-5">Delete All</button>
                            
                        </div>
                        
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-lg-2 input-search" type="search" placeholder="Search" value={filter} onChange={e => onFilter(e)} />
                            <button className="btn-search my-2 my-sm-0" type="submit" >Search</button>
                        </form>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th></th>
                                <th  className="customer-th"  scope="col">#</th>
                                <th className="customer-th" scope="col">Name</th>
                                <th className="customer-th" scope="col">Email</th>
                                <th className="customer-th " scope="col">Avatar</th>
                                <th className="customer-th" scope="col">Day created</th>
                                <th className="customer-th " scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((val, index) => {
                                    return <CustomerItem key={index} customer={val} index={index}/>
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
               
            </div>
            
        </section>    
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
CustomerManage.propTypes = {
    auth: PropTypes.object.isRequired,
    getAllUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getAllUser})(CustomerManage)

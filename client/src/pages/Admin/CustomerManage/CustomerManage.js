import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './CustomerManage.scss'
import {connect} from 'react-redux'
import {getAllUser} from './../../../actions/auth'
import Spinner from './../../../components/Spinner/Spinner'
import {Link} from 'react-router-dom'
import CustomerItem from './CustomerItem'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
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
    const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]
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
                    <div className="customermnm__header">
                        <div className="customermnm__header-total">
                            $Total: {totalCustomer}
                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-lg-2" type="search" placeholder="Search" value={filter} onChange={e => onFilter(e)} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th  className="customer-th"  scope="col">#</th>
                                <th className="customer-th" scope="col">Name</th>
                                <th className="customer-th" scope="col">Email</th>
                                <th className="customer-th" scope="col">Avatar</th>
                                <th className="customer-th" scope="col">Day created</th>
                                <th className="customer-th" scope="col">Action</th>
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
            <ResponsiveContainer className="chart my-5" height={300}>
                <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
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

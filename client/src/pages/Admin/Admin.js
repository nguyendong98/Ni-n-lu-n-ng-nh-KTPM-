import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadUser} from './../../actions/auth'
import Spinner from '../../components/Spinner/Spinner'
const Admin = ({loadUser, auth: {loading, user}}) => {
    useEffect(() => {
        loadUser()
    }, [loadUser])
    return  (
        <div>Trang Admin</div>
    )
    
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
Admin.propTypes = {
    loadUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {loadUser})(Admin)

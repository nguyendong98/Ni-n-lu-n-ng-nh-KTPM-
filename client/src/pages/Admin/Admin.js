import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadUser} from './../../actions/auth'
import Spinner from '../../components/Spinner/Spinner'
const Admin = ({loadUser, auth: {loading, user}}) => {
    useEffect(() => {
        loadUser()
    }, [loadUser])
    return  loading && user === null ? (<Spinner />) : (
        <Fragment>
            <h1>Trang của Admin</h1>
        </Fragment>
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

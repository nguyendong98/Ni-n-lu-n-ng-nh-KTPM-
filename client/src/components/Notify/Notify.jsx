import React from 'react'
import PropTypes from 'prop-types'
import './Notify.scss'
import {connect} from 'react-redux'
const Notify = ({notify}) => (
    notify !== null && notify.length > 0 && notify.map(val => (
        <div key={val.id} className="notify">
            {val.msg}
        </div>
        
    ))
)
    

const mapStateToProps = state => {
    return {
        notify: state.notify
    }
}
Notify.propTypes = {
    notify: PropTypes.array.isRequired
}

export default connect(mapStateToProps, null)(Notify)

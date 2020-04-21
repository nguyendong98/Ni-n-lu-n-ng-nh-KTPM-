import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import './Rooms.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllKindOfRoom} from './../../actions/room'
import Spinner from './../../components/Spinner/Spinner'
import Room from './Room'
const Rooms = ({getAllKindOfRoom, room: {rooms, loading}}) => {
    useEffect(() => {
        getAllKindOfRoom()
    }, [getAllKindOfRoom])
    return loading ? (<Spinner/>) : (
        <section className="rooms">
            <h2 className="rooms__title">Our Rooms</h2>
            <div className="rooms__menu">
                <span><Link to="/" exact="true" style={{color: "black"}}>Home</Link></span>
                <i className="fa fa-chevron-right" ></i>
                <span className="rooms__menu-home">Rooms</span>
            </div>
            <div className="container">
                <div className="row">
                    {
                        rooms ? rooms.map((val, index) => (
                            <Room key={index} rooms={val}/>
                        )) : null
                    }
                    
                </div>
            </div>
            
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#/">1</a></li>
                <li className="page-item"><a className="page-link" href="#/">2</a></li>
                <li className="page-item"><a className="page-link" href="#/">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
            
        </section>
    )
}
const mapStateToProps = state => {
    return {
        room: state.room
    }
}
Rooms.propTypes = {
    room: PropTypes.object.isRequired,
    getAllKindOfRoom: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,{getAllKindOfRoom})(Rooms)

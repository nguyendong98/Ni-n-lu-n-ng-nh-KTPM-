import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllKindOfRoom} from './../../actions/room'
import './BookNow.scss'
import RowRoom from './RowRoom'

const BookNow = ({getAllKindOfRoom, getAllRoom, room: {rooms, allroom}}) => {
    useEffect(() => {
        getAllKindOfRoom();
        
    }, [getAllKindOfRoom, getAllRoom])
    return (
        <section className="Booknow">
            <div className="Booknow__banner">
                <div className="Booknow__banner-context">
                    Book Now !
                </div>
            </div>
            <div className="Booknow__container p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 Booknow__container-form">
                            <form action="">
                                <div className="form-title">
                                    <label>Step 1: Check</label>
                                </div>
                                <div className="form-contain">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <p>Check In*</p>
                                            <input type="date" name="datecheckin" style={{width: '100%'}}/>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <p>Check Out*</p>
                                            <input type="date" name="datecheckout" style={{width: '100%'}}/>
                                        </div>                                        
                                    </div>
                                </div>
                            </form>
                            <form action="" className="my-5">
                                <div className="form-title">
                                    <label>Step 2: Customer info</label>
                                </div>
                                <div className="form-contain">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <p>Full name*</p>
                                            <input type="text" name="customername" style={{width: '100%'}}/>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <p>Phone*</p>
                                            <input type="text" name="phone" style={{width: '100%'}}/>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <p>Email*</p>
                                            <input type="email" name="phone" style={{width: '100%'}}/>
                                        </div>  
                                        <div className="col-lg-6 col-md-12">
                                            <p>Identity card*</p>
                                            <input type="text" name="identitycard" style={{width: '100%'}}/>
                                        </div>                                      
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                        <div className="col-lg-4 offset-lg-1 col-md-12 Booknow__container-form">                           
                            <form action="" className="" style={{with: '100%'}}>
                                <div className="form-title">
                                    <label>Step 3: Select a room</label>
                                </div>
                                <div className="form-contain">
                                    <div className="container">
                                        <div className="row">
                                            <table style={{width: '100%'}}>
                                                <tbody >
                                                    <tr>
                                                        <th>Kind of Room</th>
                                                        <th>Room name</th>
                                                        <th>Price</th>
                                                        <th>Choose</th>
                                                    </tr>
                                                    {
                                                        
                                                        rooms.map((val, index) => {
                                                            return (
                                                                <RowRoom key={index} room={val} allroom={allroom}/>
                                                            )
                                                        })
                                                    }
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>       
            </div>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        room: state.room
    }
}


BookNow.propTypes = {
    room: PropTypes.object.isRequired,
    getAllKindOfRoom: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getAllKindOfRoom})(BookNow)

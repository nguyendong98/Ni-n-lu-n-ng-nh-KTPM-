import React, {useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllKindOfRoom, bookRoom} from './../../actions/room'
import Alert from './../../components/Alert/Alert'
import Spinner from './../../components/Spinner/Spinner'
import './BookNow.scss'


const BookNow = ({auth, getAllKindOfRoom, getAllRoom, room: {rooms, allroom, loading}, bookRoom}) => {
    
    useEffect(() => {
        getAllKindOfRoom();
        
    }, [getAllKindOfRoom, getAllRoom])
    
    const [formData, setFormData] = useState({
        roomname: '',
        datecheckin: '',
        datecheckout: '',       
        identitycard: '',
        phone: '',
        nationality: ''
       

    })
    const {roomname, datecheckin, datecheckout, identitycard, phone, nationality} = formData
    const showSelectRoomItem = () => {
      return  rooms.map((room, index) => {
            const roombykind = allroom.filter(val => val.kind === room._id && val.status === false)
            return (
                <Fragment key={index}>
                    <tr>
                        <td>{room.name.toUpperCase()}</td>
                        <td>{room.price} $</td>
                        <td>
                            <select name="roomname" value={roomname} onChange={e => onChange(e)}>
                                <option  >-----Select----</option>
                                {roombykind.map((val, index) => {
                                return (
                                    <option key={index} value={val.name}>{val.name}</option>
                                )
                                })}
                            </select>
                        </td>
                        <td><input type="radio" name="radiocheck"></input></td>
                    </tr>
                </Fragment>
            )
        })
    }
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        bookRoom(formData)
    }
    if(auth.isAuthenticated ===null){
        alert('Please Login if you want to book room')
        return <Redirect to="/login" exact />
        
    }
    return loading ? (<Spinner/>) :
    (
        <section className="Booknow">
            <div className="Booknow__banner">
                <div className="Booknow__banner-context">
                    Book Now !
                </div>
            </div>
            <div className="Booknow__container p-5">
                <div className="container">                    
                    <form >
                        <div className="row">
                            <div className="col-lg-7 col-md-12 Booknow__container-form">
                                <div >
                                    <div className="form-title">
                                        <label>Step 1: Check</label>
                                    </div>
                                    <div className="form-contain">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <p>Check In*</p>
                                                <input type="date" name="datecheckin" style={{width: '100%'}} value={datecheckin} onChange={e => onChange(e)} />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <p>Check Out*</p>
                                                <input type="date" name="datecheckout" style={{width: '100%'}} value={datecheckout} onChange={e => onChange(e)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <div className="form-title">
                                        <label>Step 2: Customer info</label>
                                    </div>
                                    <div className="form-contain">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <p>Full name*</p>
                                                <input type="text" name="customername" style={{width: '100%'}} value={auth.user.name} disabled />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <p>Phone*</p>
                                                <input type="text" name="phone" style={{width: '100%'}} value={phone} onChange={e => onChange(e)} />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <p>Nationality*</p>
                                                <input type="text" name="nationality" style={{width: '100%'}} value={nationality} onChange={e => onChange(e)} />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <p>Identity card*</p>
                                                <input type="text" name="identitycard" style={{width: '100%'}} value={identitycard} onChange={e => onChange(e)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            <div className="col-lg-4 offset-lg-1 col-md-12 Booknow__container-form">
                                <div  className="form-select-room" style={{with: '100%'}}>
                                    <div className="form-title">
                                        <label>Step 3: Select a room</label>
                                    </div>
                                    <div className="form-contain">
                                        <div className="container">
                                            <div className="row">
                                                <table style={{width: '100%'}}>
                                                    <tbody>
                                                        <tr>
                                                            <th>Kind of Room</th>
                                                            <th>Price</th>
                                                            <th>Room name</th>
                                                            <th>Choose</th>
                                                        </tr>
                                                        {
                                                            showSelectRoomItem()
                                                        
                                                        }
        
                                                    </tbody>
                                                </table>
                                                <input type="submit" value="Submit" onClick={e => onSubmit(e)} />
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                                                        
                 </div>
                 <div className="container">
                    <Alert/>                                       
                 </div>
                 
            </div>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        room: state.room,
        auth: state.auth
    }
}


BookNow.propTypes = {
    room: PropTypes.object.isRequired,
    getAllKindOfRoom: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {getAllKindOfRoom, bookRoom})(BookNow)

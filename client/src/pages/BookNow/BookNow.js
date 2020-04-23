import React, {useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {getAllKindOfRoom, bookRoom} from './../../actions/room'
import Alert from './../../components/Alert/Alert'
import Spinner from './../../components/Spinner/Spinner'
import {Link} from 'react-router-dom'

import './BookNow.scss'


const BookNow = ({ auth, getAllKindOfRoom, getAllRoom, room: {rooms, allroom, loading}, bookRoom}) => {
    
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
      return rooms ?  rooms.map((room, index) => {
            const roombykind = allroom.filter(val => val.kind === room._id && val.status === 'Còn trống')
            return (
                <Fragment key={index}>
                    <tr>
                        <td>{room.name.toUpperCase()}</td>
                        <td>{room.price} $</td>
                        <td>
                            <select name="roomname" value={roomname} onChange={e => onChange(e)} className="form-control font-secondary">
                                <option  >-----Select----</option>
                                {roombykind.map((val, index) => {
                                return (
                                    <option key={index} value={val.name}>{val.name}</option>
                                )
                                })}
                            </select>
                        </td>
                        
                    </tr>
                </Fragment>
            )
        }) : null
    }
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        bookRoom(formData)
    }
    
    return loading ? (<Spinner/>) :
    (
        
        <section className="Booknow">            
            <h2 className="Booknow__title">Book now</h2>
            <div className="Booknow__menu">
                <span><Link to="/" exact="true" style={{color: "black"}}>Home</Link></span>
                <i className="fa fa-chevron-right" ></i>
                <span className="Booknow__menu-home">Book now</span>
            </div>
            <div className="Booknow__container p-5">
                <div className="container">                    
                    <form autoComplete="off" >
                        <div className="row">
                            <div className="col-lg-6 col-md-12 Booknow__container-form">
                                <div >
                                    <div className="form-title">
                                        <label>Step 1: Check</label>
                                    </div>
                                    <div className="form-contain">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="px-1 py-1 mt-1">Check In*</p></i></b>
                                                <div className='input-group mb-3'>
                                                    <div className='input-group-prepend'>
                                                        <span className='input-group-text' id='basic-addon1'>
                                                            <i className='fa fa-calendar font-secondary'  />
                                                        </span>
                                                    </div>
                                                    <input type='date' className='form-control font-secondary'
                                                        value={datecheckin}
                                                        onChange={e => onChange(e)}
                                                        name="datecheckin"
                                                        // style={{width: '100%'}}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="px-1 py-1 mt-1">Check Out*</p></i></b>
                                                <div className='input-group mb-3'>
                                                    <div className='input-group-prepend'>
                                                        <span className='input-group-text' id='basic-addon1'>
                                                            <i className='fa fa-calendar font-secondary'  />
                                                        </span>
                                                    </div>
                                                    <input type='date' className='form-control font-secondary'
                                                        value={datecheckout}
                                                        onChange={e => onChange(e)}
                                                        name="datecheckout"
                                                        // style={{width: '100%'}}
                                                    />
                                                </div>
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
                                                <b><i><p className="px-1 py-1 mt-1">Full name*</p></i></b>
                                                <input type="text" name="customername" 
                                                 className='form-control font-secondary' value={auth.user.name} disabled
                                                 placeholder="Fill your fullname" />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="px-1 py-1 mt-1">Phone*</p></i></b>
                                                <input type="text" name="phone" className='form-control font-secondary' 
                                                value={phone} onChange={e => onChange(e)} 
                                                placeholder="Fill your phone"/>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="mt-2">Nationality*</p></i></b>
                                                <input type="text" name="nationality" className='form-control font-secondary' 
                                                value={nationality} onChange={e => onChange(e)} 
                                                placeholder="Fill your nationality"/>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="mt-2">Identity card*</p></i></b>
                                                <input type="text" name="identitycard" className='form-control font-secondary' 
                                                value={identitycard} onChange={e => onChange(e)} 
                                                placeholder="Fill your Identity card"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12 Booknow__container-form">
                                <div  className="form-select-room" style={{with: '100%'}}>
                                    <div className="form-title">
                                        <label>Step 3: Select a room</label>
                                    </div>
                                    <div className="form-contain">
                                        <div className="container-fluid">
                                            <div className="row py-5">
                                                <table style={{width: '100%'}} className="table">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>Kind of Room</th>
                                                            <th>Price</th>
                                                            <th>Room name</th>
                                                            
                                                        </tr>
                                                        {
                                                            showSelectRoomItem()
                                                        
                                                        }
        
                                                    </thead>
                                                </table>
                                                <div className="d-flex justify-content-center mt-4 w-100" style={{margin: '0 auto'}}>
                                                    <span className="d-inline-block w-100" data-toggle="tooltip" title="Disabled tooltip">
                                                        <input type="submit" className="btn btn-success btn-block w-100 font-btn py-3 px-3 " 
                                                            value="Submit" onClick={e => onSubmit(e)} 
                                                            
                                                        />
                                                    </span>    
                                                </div>    
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
    auth: PropTypes.object.isRequired,
    
}

export default connect(mapStateToProps, {getAllKindOfRoom, bookRoom})(BookNow)

import React, {useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllKindOfRoom, bookRoom} from './../../actions/room'
import Alert from '../../components/Alert/Alert'
import Spinner from '../../components/Spinner/Spinner'
import {Link} from 'react-router-dom'

import './BookNow.scss'


const BookNow = ({ auth, getAllKindOfRoom, getAllRoom, room: {rooms, loading}, bookRoom}) => {
    
    useEffect(() => {
        getAllKindOfRoom();
        
    }, [getAllKindOfRoom, getAllRoom])
    

    const [formData, setFormData] = useState({
        datecheckin: '',
        datecheckout: '',       
        identitycard: '',
        phone: '',
        nationality: '',
        roomrents: []
    })
    // const [isDisableCheckBox, setIsDisableCheckBox] = useState(true)
    const { datecheckin, datecheckout, identitycard, phone, nationality } = formData
    const showSelectRoomItem = () => {
      return rooms ?  rooms.map((room, index) => {
            var roomRented = {};
            roomRented.id_kindOfRoom = room._id;
            roomRented.price = room.price;
            const onChangeStep3 =  e => {
                roomRented.quantity = e.target.value;
                // if(e.target.value > 0 && e.target.value <= 3) {
                //     setIsDisableCheckBox(false)
                // } else setIsDisableCheckBox(true) // --> set state cho checkbox theo số lượng phòng

            }
            return (
                <Fragment key={index}>
                    <tr>
                        <td>{room.name.toUpperCase()}</td>
                        <td>{room.price} $</td>
                        <td>
                            <input className="form-control font-secondary"  type="number" min={0} max={3} name="quantity"
                                   onChange={e => onChangeStep3(e)} value={roomRented.quantity}/>
                        </td>
                        <td className="d-flex justify-content-center align-items-center">
                            <input type="checkbox"  className="option-input checkbox" onClick={() => pushItem(roomRented)}/>
                        </td>

                    </tr>
                </Fragment>
            )
        }) : null
    }

    const onChangeStep1_2 =  e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        bookRoom(formData)
    }
    const findItem = (arr, e) => {
        var i = -1
        arr.map((val, index) => {
            if(e.id_kindOfRoom === val.id_kindOfRoom){
                i = index
            }
            return i
        })
        return i
    }
    const pushItem = (e) => {

        const formdata = {...formData}
        const i = findItem(formdata.roomrents, e)

        if(i === -1) {
            formdata.roomrents.push(e)
            setFormData(formdata)
        }
        else {
            formdata.roomrents.splice(i, 1)
            setFormData(formData)
        }
    }
    console.log(formData)
    return loading ? (<Spinner/>) :
    (
        
        <section className="Booknow">            
            <h2 className="Booknow__title  animate__animated animate__flip">Book now</h2>
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
                                                        onChange={e => onChangeStep1_2(e)}
                                                        name="datecheckin"
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
                                                        onChange={e => onChangeStep1_2(e)}
                                                        name="datecheckout"
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
                                                 className='form-control font-secondary' value={auth.user ? auth.user.name: null} disabled
                                                 placeholder="Fill your fullname" />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="px-1 py-1 mt-1">Phone*</p></i></b>
                                                <input type="text" name="phone" className='form-control font-secondary' 
                                                value={phone} onChange={e => onChangeStep1_2(e)}
                                                placeholder="Fill your phone"/>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="mt-2">Nationality*</p></i></b>
                                                <select className="form-control font-secondary"   name="nationality" value={nationality}
                                                    onChange={e => onChangeStep1_2(e)}>
                                                    <option value="vietnamese" >vietnamese</option>
                                                    <option value="england">england</option>
                                                    <option value="france">france</option>
                                                    <option value="american">american</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <b><i><p className="mt-2">Identity card*</p></i></b>
                                                <input type="text" name="identitycard" className='form-control font-secondary' 
                                                value={identitycard} onChange={e => onChangeStep1_2(e)}
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
                                                            <th>Quantity</th>
                                                            <th>Choose</th>
                                                        </tr>
                                                        {
                                                            showSelectRoomItem()
                                                        
                                                        }
        
                                                    </thead>
                                                </table>
                                                <div className="d-flex justify-content-center mt-4 w-100" style={{margin: '0 auto'}}>
                                                    <span className="d-inline-block w-100" data-toggle="tooltip" title="submit now">
                                                        <button type="submit" onClick={e => onSubmit(e)} className=" d-flex justify-content-center align-items-center btn-submit py-3 px-3 "

                                                            
                                                        ><span className="spinner-grow spinner-grow-lg"></span>Submit</button>
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

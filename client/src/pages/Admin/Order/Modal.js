import React, {useEffect} from "react";
import { connect } from "react-redux";
import Monment from 'react-moment';
import { getAllKindOfRoom } from './../../../actions/room';
const getName = (arr ,id) => {
    let name = null;
    arr.map(val => {
        if(val._id === id) {
            name = val.name
        }
        return name
    })
    return name
}
const Model = ({roomrentDetail, users, rooms, getAllKindOfRoom, allroom}) => {
    useEffect(() => {
        getAllKindOfRoom();
    }, [getAllKindOfRoom]);
    const showRoomRent = () => {
       return  roomrentDetail ? roomrentDetail.roomrents.map((val, i) => {
            return (
                <div key={i}> <span className="badge badge-success">{getName(rooms, val.id_kindOfRoom)}</span> => Quantity: <span className="badge badge-success">{val.quantity}</span> <br/> </div>
            )
        }) : null
    }
    const showRoomDetail  = () => {
        return roomrentDetail ?  roomrentDetail.roomrent_detail.map((val, index) => {
            return  index !== roomrentDetail.roomrent_detail.length - 1 ? val.name + ', ' : val.name + '.'

        }) : null

    }
    return   (
        <div className="modal fade animate__animated animate__backInDown" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" style={{fontWeight: '600', fontSize: '26px'}} id="exampleModalLabel">Code: {roomrentDetail ? roomrentDetail._id : ''}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table style={{border: 'none', width: '100%'}}>
                            <tbody>
                                <tr>
                                    <th>Customer's name*: </th>
                                    <th>{roomrentDetail && users ? getName(users, roomrentDetail.user) : ''}</th>
                                </tr>
                                <tr>
                                    <th>Date check in*: </th>
                                    <th><span className="badge badge-success"> { roomrentDetail ? <Monment format="MM/DD/YYYY">{roomrentDetail.datecheckin}</Monment> : '' }</span></th>
                                </tr>
                                <tr>
                                    <th>Date check out*: </th>
                                    <th><span className="badge badge-danger">{ roomrentDetail ? <Monment format="MM/DD/YYYY">{roomrentDetail.datecheckout}</Monment> : '' }</span></th>
                                </tr>
                                <tr>
                                    <th>Status*: </th>
                                    <th>{ roomrentDetail ? roomrentDetail.status : '' }</th>
                                </tr>
                                <tr>
                                    <th>Phone number*:</th>
                                    <th>{ roomrentDetail ? roomrentDetail.phone : '' }</th>
                                </tr>
                                <tr>
                                    <th>Identity card*</th>
                                    <th>{ roomrentDetail ? roomrentDetail.identitycard : ''}</th>
                                </tr>
                                <tr>
                                    <th>Room rented*:</th>
                                    <th>{ showRoomRent() }</th>
                                </tr>
                                <tr>
                                    <th>Room rented details*:</th>
                                    <th> { showRoomDetail() } </th>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        rooms: state.room.rooms,
        users: state.auth.users
    }
}
export default connect(mapStateToProps, {getAllKindOfRoom})(Model);

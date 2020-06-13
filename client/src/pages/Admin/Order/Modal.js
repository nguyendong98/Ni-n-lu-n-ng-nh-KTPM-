import React  from "react";
import { connect } from "react-redux";
import Moment from 'react-moment';

import { getBillById } from './../../../actions/bill'
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
const Model = ({roomrentDetail, users, rooms,  billDetail}) => {

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
                                    <th><span className="badge badge-success"> { roomrentDetail ? <Moment format="MM/DD/YYYY">{roomrentDetail.datecheckin}</Moment> : '' }</span></th>
                                </tr>
                                <tr>
                                    <th>Date check out*: </th>
                                    <th><span className="badge badge-danger">{ roomrentDetail ? <Moment format="MM/DD/YYYY">{roomrentDetail.datecheckout}</Moment> : '' }</span></th>
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
                                <tr>
                                    <th>Total_price*: </th>
                                    <th>{billDetail ? billDetail.totalPriceNotDisCount : ''} $ </th>
                                </tr>
                                <tr>
                                    <th>Number of times book*:</th>
                                    <th>{billDetail ? billDetail.discount : ''} times</th>
                                </tr>
                                <tr>
                                    <th>Discount*: </th>
                                    <th>{billDetail ? showDisCount(billDetail.discount) : ''} </th>
                                </tr>
                                <tr>
                                    <th>Last price*: </th>
                                    <th><span className="badge badge-success">{billDetail ? billDetail.total_price : ''} $</span></th>
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
const showDisCount = (i) => {
    if(i) {
        if(i >= 3 && i < 6) return '5%'
        if(i >= 6 && i < 9) return '10%'
        if(i >=9 && i <15) return '15%'
        if(i>=15) return '25%'
        else return 'No discount'
    }
}
const mapStateToProps = state => {
    return {
        rooms: state.room.rooms,
        users: state.auth.users,
        billDetail: state.bill.billDetail
    }
}
export default connect(mapStateToProps, { getBillById })(Model);

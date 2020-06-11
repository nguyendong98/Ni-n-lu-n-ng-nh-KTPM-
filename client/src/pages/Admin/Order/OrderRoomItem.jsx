import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { getAllUser } from '../../../actions/auth';
import { acceptOrderRoom } from '../../../actions/room';
import { deleteRoomRentedById } from "../../../actions/room";
import { getRoomRentById } from "../../../actions/room";


const OrderRoomItem = ({
  roomrented,
  index,
  auth: { users },
  getAllUser,
  acceptOrderRoom,
  deleteRoomRentedById,
  getRoomRentById

}) => {
  useEffect(() => {
    getAllUser();
  }, [getAllUser]);

  const findUser = (user) => {
    var name = '';
    users.map((value, key) => {
      if (value._id === user) {
        name = value.name;
        return name;
      }
      return name;
    });
    return name;
  };
  return (
    <Fragment>
      <tr style={{ height: '10rem', lineHeight: '10rem' }}>
        <th scope='row'>{index + 1}</th>
        <td className='customer-td'>{findUser(roomrented.user)}</td>
        <td className='customer-td'>
          <Moment format='MM/DD/YYYY'>{roomrented.datecheckin}</Moment>
        </td>
        <td className='customer-td'>
          <Moment format='MM/DD/YYYY'>{roomrented.datecheckout}</Moment>
        </td>
        <td className='customer-td'>{roomrented.phone}</td>
        <td className='customer-td'>
          <Moment format='MM/DD/YYYY'>{roomrented.date}</Moment>
        </td>
        <td className='customer-td'>
          <span
            className={
              roomrented.status === 'approve'
                ? 'badge badge-primary'
                : 'badge badge-warning'
            }
          >
            {roomrented.status}
          </span>
        </td>
        <td className='customer-td text-center'>
          <button
              className={roomrented.status === 'approve' ? 'btn btn-view d-inline-block mr-2' : 'd-none'}
              data-toggle="modal" data-target="#exampleModal" onClick={() => getRoomRentById(roomrented._id)}>
            View
          </button>
          <button

            className={roomrented.status === 'approve' ? 'd-none' : 'd-inline-block btn btn-handle mr-2'}
            onClick={(e) => acceptOrderRoom(roomrented._id)}
          >
            Accept
          </button>
          <button
            className='btn-delete btn mr-2'
            onClick={(e) => deleteRoomRentedById(roomrented._id)}
          >
            Delete
          </button>

        </td>
      </tr>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};
OrderRoomItem.propTypes = {
  roomrented: PropTypes.object.isRequired,
  getAllUser: PropTypes.func.isRequired,
  acceptOrderRoom: PropTypes.func.isRequired,
  deleteRoomRentedById: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getAllUser, acceptOrderRoom, deleteRoomRentedById, getRoomRentById })(
  OrderRoomItem
);

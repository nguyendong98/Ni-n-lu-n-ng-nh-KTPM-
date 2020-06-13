import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './CustomerManage.scss';
import { connect } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import OrderRoomItem from './OrderRoomItem';
import { getAllRoomRent } from '../../../actions/room';
import { deleteAllRoomRented } from "../../../actions/room";
import { getAllKindOfRoom } from "../../../actions/room";
import Model from "./Modal";
const OrderRooms = ({ room: { roomrented, loading, roomrentDetail, rooms }, getAllRoomRent, deleteAllRoomRented, getAllKindOfRoom  }) => {
  useEffect(() => {
    getAllRoomRent();
  }, [getAllRoomRent]);
  useEffect(() => {
    getAllKindOfRoom();
  }, [getAllKindOfRoom]);
  var input = document.getElementById('search');
  const show = () => {
    console.log(input);
  };
  return loading ? (
    <Spinner />
  ) : (
    <section className='customermnm'>
      <h2 className='customermnm__title animate__animated animate__flip'>Orders Room</h2>
      <div className='customermnm__menu'>
        <span>
          <Link to='/admin' exact='true' style={{ color: 'black' }}>
            Admin
          </Link>
        </span>
        <i className='fa fa-chevron-right'></i>
        <span className='customermnm__menu-home'>Customers</span>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='customermnm__header d-flex justify-content-between align-items-center'>
            <div className='customermnm__header-total '>
              <span>$Total:</span>

              <button className='btn-handle btn-delete ml-5' onClick={e => {
                e.preventDefault();
                deleteAllRoomRented()
              }}>
                Delete All
              </button>
            </div>

            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-lg-2 input-search'
                type='search'
                placeholder='Search'
                id='search'
              />
              <button
                className='btn-search my-2 my-sm-0'
                type='submit'
                onClick={(e) => show()}
              >
                Search
              </button>
            </form>
          </div>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th className='customer-th' scope='col'>
                  #
                </th>
                <th className='customer-th' scope='col'>
                  Customer
                </th>
                <th className='customer-th' scope='col'>
                  Check-in
                </th>
                <th className='customer-th' scope='col'>
                  Check-out
                </th>
                <th className='customer-th' scope='col'>
                  Room rent
                </th>
                <th className='customer-th' scope='col'>
                  Status
                </th>
                <th className='customer-th text-center' scope='col'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {roomrented
                ? roomrented.map((val, key) => {
                    return (
                      <OrderRoomItem key={key} index={key} roomrented={val} rooms={rooms} />
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <Model roomrentDetail={roomrentDetail} rooms={rooms}/>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    room: state.room,
  };
};
OrderRooms.propTypes = {
  room: PropTypes.object.isRequired,
  deleteAllRoomRented: PropTypes.func.isRequired,
  getAllKindOfRoom: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getAllRoomRent, deleteAllRoomRented, getAllKindOfRoom })(OrderRooms);

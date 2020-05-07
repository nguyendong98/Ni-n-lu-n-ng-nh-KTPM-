import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './CustomerManage.scss';
import { connect } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import OrderRoomItem from './OrderRoomItem';
import { getAllRoomRent } from '../../../actions/room';

const OrderRooms = ({ room: { roomrented, loading }, getAllRoomRent }) => {
  useEffect(() => {
    getAllRoomRent();
  }, [getAllRoomRent]);

  var input = document.getElementById('search');
  const show = () => {
    console.log(input);
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className='customermnm'>
      <h2 className='customermnm__title'>Orders Room</h2>
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

              <button className='btn-handle btn-delete ml-5 '>
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
                  Phone number
                </th>
                <th className='customer-th' scope='col'>
                  Date book
                </th>
                <th className='customer-th' scope='col'>
                  Status
                </th>
                <th className='customer-th' scope='col'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {roomrented
                ? roomrented.map((val, key) => {
                    return (
                      <OrderRoomItem key={key} index={key} roomrented={val} />
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
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
};

export default connect(mapStateToProps, { getAllRoomRent })(OrderRooms);

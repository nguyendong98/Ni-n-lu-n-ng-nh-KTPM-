import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../CustomerManage/CustomerManage.scss';
import { connect } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';

const CheckOut = () => {
  useEffect(() => {}, []);
  var input = document.getElementById('search');
  const show = () => {
    console.log(input);
  };
//   return loading ? (
//     <Spinner />
//   ) : (
    return(
    <section className='customermnm'>
      <h2 className='customermnm__title animate__animated animate__flip'>
        Check Out
      </h2>
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
                <th className='customer-th text-center' scope='col'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {roomrented
                ? roomrented.map((val, key) => {
                    return (
                      <OrderRoomItem key={key} index={key} roomrented={val} />
                    );
                  })
                : null} */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {};
};
CheckOut.propTypes = {};

export default connect(mapStateToProps, {})(CheckOut);

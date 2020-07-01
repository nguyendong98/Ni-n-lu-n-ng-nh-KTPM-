import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../CustomerManage/CustomerManage.scss';
import { connect } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { getAllBill, checkOut } from '../../../actions/bill';
import { getAllUser } from '../../../actions/auth';
import Moment from "react-moment";
const CheckOut = ({
                    getAllBill,
                    getAllUser,
                    checkOut,
                    bill: { bills, loading },
                    auth: { users },
                  }) => {
  useEffect(() => {
    getAllBill();
    getAllUser();
  }, [getAllBill, getAllUser]);
  var input = document.getElementById('search');
  const show = () => {
    console.log(input);
  };
  return loading ? (
      <Spinner />
  ) : (
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
                  Id Bill
                </th>
                <th className='customer-th' scope='col'>
                  Customer Name
                </th>
                <th className='customer-th' scope='col'>
                  Total Price
                </th>
                <th className='customer-th' scope='col'>
                  Date book
                </th>
                <th className='customer-th text-center' scope='col'>
                  Action
                </th>
              </tr>
              </thead>
              <tbody>
              {bills
                  ? bills.map((val, key) => {
                    return (
                        <tr key={key}>
                          <td className='customer-td'>{key + 1}</td>
                          <td className='customer-td'>{val._id}</td>
                          {users.map((user, index) => {
                            if (val.customer === user._id) {
                              return (
                                  <td key={index} className='customer-td'>
                                    {user.name}
                                  </td>
                              );
                            }

                          })}
                          <td className='customer-td'>{val.total_price} $</td>
                          <td className='customer-td'><Moment format="YYYY/MM/DD">{val.date}</Moment> </td>
                          <td className='customer-td'>
                            {val.status ? (
                                <div>Checked out</div>
                            ) : (
                                <button
                                    className='btn-warning w-100'
                                    onClick={() => checkOut(val._id)}
                                >
                                  Check out
                                  <i class="fa fa-calendar-check-o pl-4" aria-hidden="true"></i>
                                </button>
                            )}
                          </td>
                        </tr>
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
    bill: state.bill,
    auth: state.auth,
  };
};
CheckOut.propTypes = {
  bill: PropTypes.object.isRequired,
  getAllBill: PropTypes.func.isRequired,
  getAllUser: PropTypes.func.isRequired,
  checkOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllBill, getAllUser, checkOut })(
    CheckOut
);

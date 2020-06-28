import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from './../../actions/auth';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import './Admin.scss';
const Admin = ({ loadUser, auth: { loading, user } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='admin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12 pb-5'>
              <Link to='/customermanagement' exact='true'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    style={{ height: '15rem' }}
                    src='data:image/png;base64,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'
                    alt='Cardimagecap'
                  />
                  <div className='card-body'>
                    <h2>Customer Management</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-lg-4 col-md-6 col-12 pb-5'>
              <Link to='/roommanage' exact='true'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    style={{ height: '15rem' }}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-uSy70QL7kV5Lj_Fk5elQKXblq4vG0j2dmexGSc4OEgDAWjWN'
                    alt='daahg'
                  />
                  <div className='card-body'>
                    <h2>Rooms Management</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-lg-4 col-md-6 col-12 pb-5'>
              <Link to='/roomrented' exact='true'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    style={{ height: '15rem' }}
                    src='data:image/png;base64,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'
                    alt='Cardimagecap'
                  />
                  <div className='card-body'>
                    <h2>Reservation Manager</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-lg-4 col-md-6 col-12 pb-5'>
              <Link to='/checkout' exact='true'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    style={{ height: '15rem' }}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwQAdfUjJawjL7bgvGtny0Emq6eOSiSIE-EaXKH9Tte8AOv08X'
                    alt='Cardimagecap'
                  />
                  <div className='card-body'>
                    <h2>Check Out</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-lg-4 col-md-6 col-12 pb-5'>
              <Link to='/statistical' exact='true'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    style={{ height: '15rem' }}
                    src='https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-bar-chart-icon-png-image_4165593.jpg'
                    alt='Cardimagecap'
                  />
                  <div className='card-body'>
                    <h2>Statistical</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-lg-4 col-md-6 col-12 pb-5'>
              <Link to='/tours' exact='true'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    style={{ height: '15rem' }}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlGSpLRkztUTqu1RAGh1qP3RbKLY-n9jay8D-JJDI9ogmTA-GZ'
                    alt='Cardimagecap'
                  />
                  <div className='card-body'>
                    <h2>Promotion Management</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
Admin.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadUser })(Admin);

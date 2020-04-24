import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './roomdetail.scss';
import { connect } from 'react-redux';
import { getKindOfRoomDetail } from './../../actions/room';
import Spinner from '../../components/Spinner/Spinner';

const RoomDetail = ({
  getKindOfRoomDetail,
  match,
  room: { room, loading },
}) => {
  useEffect(() => {
    getKindOfRoomDetail(match.params.id);
  }, [getKindOfRoomDetail, match.params.id]);
  console.log(room);
  return loading ? (
    <Spinner />
  ) : (
    <section className='rooms'>
      <h2 className='rooms__title'>Room Detail</h2>
      <div className='rooms__menu'>
        <span>
          <link to='/' exact='true' style={{ color: 'black' }} />
          Home
        </span>
        <i className='fa fa-chevron-right' />
        <span className='rooms__menu-home'>Rooms</span>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <div className='image_roomdetail'>
              {room ? (
                <img src={room.image} style={{ width: '100%' }} alt='' />
              ) : null}
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='room_booking'>
              <h3>Your Reservation</h3>
              <div className='col-12'>
                <label htmlFor='basic-url'>Check In</label>
                <div className='input-group mb-3'>
                  <input type='text' className='form-control' />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-calendar' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <label htmlFor='basic-url'>Check Out</label>
                <div className='input-group mb-3'>
                  <input type='text' className='form-control' />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-calendar' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <label htmlFor='basic-url'>Guests</label>
                <div className='input-group mb-3'>
                  <input type='text' className='form-control' />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-calendar' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <label htmlFor='basic-url'>Room</label>
                <div className='input-group mb-3'>
                  <input type='text' className='form-control' />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-calendar' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <button
                  type='button'
                  className='btn btn-outline-primary'
                  style={{ width: '100%' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-8'>
          <div className='room_info'>
            <div className='row'>
              <div className='col-8'>
                <h3>Premium King Room</h3>
              </div>
              <div className='col-4 rating-right'>
                <button
                  type='button'
                  className='btn btn-warning'
                  style={{ width: '100%' }}
                >
                  Booking Now
                </button>
              </div>
            </div>
            <div className='col-12'>
              <table className='tb_detail'>
                {room ? (
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <h2>
                          {room.price}$/<span>Pernight</span>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td className='title'>size:</td>
                      <td className='detail'>{room.size}</td>
                    </tr>
                    <tr>
                      <td className='title'>Capacity:</td>
                      <td className='detail'>Max persion 3</td>
                    </tr>
                    <tr>
                      <td className='title'>Bed:</td>
                      <td className='detail'>{room.bed} ft</td>
                    </tr>
                    <tr>
                      <td className='title'>Services:</td>
                      <td className='detail'>{room.sevices}</td>
                    </tr>
                  </tbody>
                ) : null}
              </table>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-8 info_detail'>
          {room ? <p>{room.text}</p> : null}
        </div>
      </div>
    </section>
  );
};

RoomDetail.propTypes = {
  getKindOfRoomDetail: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    room: state.room,
  };
};

export default connect(mapStateToProps, { getKindOfRoomDetail })(RoomDetail);

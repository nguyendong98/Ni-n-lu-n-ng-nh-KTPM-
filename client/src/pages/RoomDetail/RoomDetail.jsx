import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './roomdetail.scss';
import { connect } from 'react-redux';
import { getKindOfRoomDetail } from './../../actions/room';
import {
  createComment,
  getAllComment,
  deleteComment,
} from './../../actions/feedback';
import Spinner from '../../components/Spinner/Spinner';

const RoomDetail = ({
  getKindOfRoomDetail,
  createComment,
  getAllComment,
  deleteComment,
  match,
  room: { room, loading },
  auth: { user },
  feedback: { feedbacks },
}) => {
  useEffect(() => {
    getKindOfRoomDetail(match.params.id);
    getAllComment();
  }, [getKindOfRoomDetail, match.params.id, getAllComment]);

  const data = {};
  const onChange = (e) => {
    console.log(e.target.value);
    data.comment = e.target.value;
    console.log(user.name);
  };
  const onClick = () => {
    createComment(data, match.params.id);
  };
  return loading && !room ? (
    <Spinner />
  ) : (
    <section className='rooms'>
      <h2 className='rooms__title animate__animated animate__flip'>
        Room Detail
      </h2>
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
              <div className='col-12 ip-group'>
                <label htmlFor='basic-url'>Check In</label>
                <div className='input-group mb-3'>
                  <input type='date' className='form-control' />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-calendar' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 ip-group'>
                <label htmlFor='basic-url'>Check Out</label>
                <div className='input-group mb-3'>
                  <input type='date' className='form-control' />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-calendar' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 ip-group'>
                <label htmlFor='basic-url'>Guests</label>
                <div className='input-group mb-3'>
                  <select className='custom-select' id='inputGroupSelect02'>
                    <option>Choose...</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-user' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 ip-group'>
                <label htmlFor='basic-url'>Room</label>
                <div className='input-group mb-3'>
                  <select className='custom-select' id='inputGroupSelect02'>
                    <option>Choose...</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic-addon2'>
                      <i className='fa fa-bed' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-12 '>
                <button
                  type='button'
                  className='btn btn-success mt-5 py-4'
                  style={{ width: '100%' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-8 ' style={{ padding: '0' }}>
          <div className='room_info'>
            <div className='row'>
              <div className='col-8'>
                <h3>{room ? room.name : ''}</h3>
              </div>
              <div className='col-4 rating-right d-flex justify-content-end align-items-center px-5'>
                {showRating(4)}
              </div>
            </div>
            <div className='col-12' style={{ padding: '0' }}>
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
                      <td className='detail'>
                        {room.services.map((val, index) => {
                          return index === room.services.length - 1
                            ? val + ',.. '
                            : val + ', ';
                        })}
                      </td>
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

        <div className='fedback col-12 col-lg-6 mt-3'>
          <div className='header d-flex justify-content-between align-items-center py-1'>
            <div className='title'>Customer reviews</div>
            <div className='count-comment'>Comment ({feedbacks.length})</div>
          </div>
          <div className='comment col-12'>
            {/* customer comment in here */}
            {user ? (
              <div className='d-flex my-2 my-lg-4 '>
                <div className='avatar'>
                  <img
                    className='rounded-circle mr-4 mt-3 mb-2'
                    src={user.avatar}
                    alt=''
                  />
                </div>
                <div className='user w-100'>
                  <div className='name'>{user.name}</div>
                  <div className='content'>
                    <form className='input-group mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        aria-describedby='basic-addon2'
                        name='comment'
                        placeholder='Enter your comment'
                        onChange={(e) => onChange(e)}
                      />
                      <div className='input-group-append'>
                        <button
                          type='reset'
                          className='fa fa-paper-plane-o text-primary ml-3'
                          id='basic-addon2'
                          aria-hidden='true'
                          onClick={() => onClick()}
                        ></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : null}
            {/* customer reviews */}
            {feedbacks
              ? feedbacks.map((value, key) => {
                  if (user) {
                    if (value.user._id === user._id) {
                      var istrue = true;
                    }
                  }
                  return (
                    <div key={key} className='d-flex my-3'>
                      <div className='avatar'>
                        <img
                          className='rounded-circle mr-4 mt-3 mb-2'
                          src={value.user.avatar}
                          alt=''
                        />
                      </div>
                      <div className='user bg-gray w-100 d-flex flex-column justify-content-center px-3'>
                        <div className='d-flex justify-content-between'>
                          <div className='name'>{value.user.name}</div>
                          {istrue ? (
                            <i
                              className='fa fa-trash-o btn-delete'
                              aria-hidden='true'
                              onClick={() => deleteComment(value._id)}
                            ></i>
                          ) : (
                            <i
                              className='fa fa-trash-o btn-delete-close'
                              aria-hidden='true'
                            ></i>
                          )}
                        </div>
                        <div className='content'>{value.comment}</div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};
const showRating = (rating) => {
  var result = [];
  for (var i = 1; i <= rating; i++) {
    result.push(
      <i
        key={Math.random()}
        className='fa fa-star'
        style={{ fontSize: '25px', color: 'yellow' }}
      ></i>
    );
  }
  for (var j = 1; j <= 5 - rating; j++) {
    result.push(
      <i
        key={Math.random()}
        className='fa fa-star-o'
        style={{ fontSize: '25px', color: 'yellow' }}
      ></i>
    );
  }
  return result;
};
RoomDetail.propTypes = {
  getKindOfRoomDetail: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  getAllComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    room: state.room,
    auth: state.auth,
    feedback: state.feedback,
  };
};

export default connect(mapStateToProps, {
  getKindOfRoomDetail,
  createComment,
  getAllComment,
  deleteComment,
})(RoomDetail);

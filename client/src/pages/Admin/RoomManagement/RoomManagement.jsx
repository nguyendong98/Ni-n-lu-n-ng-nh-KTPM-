import './RoomManagement.scss';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import { getAllRoom } from '../../../actions/room';
import { Link } from 'react-router-dom';
import '../CustomerManage/CustomerManage.scss';
const RoomManagement = ({
  room: { allroom, roomcategory, loading },
  getAllRoom,
}) => {
  useEffect(() => {
    getAllRoom();
  }, [getAllRoom]);
  console.log(roomcategory);
  return loading ? (
    <Spinner />
  ) : (
    <section className='customermnm'>
      <h2 className='customermnm__title'>Room Status</h2>
      <div className='customermnm__menu'>
        <span>
          <Link to='/admin' exact='true' style={{ color: 'black' }}>
            Admin
          </Link>
        </span>
        <i className='fa fa-chevron-right'></i>
        <span className='customermnm__menu-home'>Rooms</span>
      </div>
      <div className='container'>
        {roomcategory.map((category) => {
          return (
            <div className='row'>
              <div className='col-6 col-lg-2 px-4 pt-2'>
                <div className='category_name p-2 px-3'>
                  <div className='line-top' />
                  <div className='line-bot' />
                  {category.name}
                </div>
              </div>
              <div className='col-12 col-lg-10 row room'>
                {allroom.map((room) => {
                  if (room.kind === category._id) {
                    if (room.status === 'Đã đặt') {
                      return (
                        <div className='col-3 col-lg-2 p-2'>
                          <div className='py-2 px-3 enable room d-flex flex-column justify-content-between'>
                            <i className='fa fa-bed icon' aria-hidden='true' />
                            <div className='room_name py-1'>{room.name}</div>
                            <div className='pt-1 pb-1'>
                              <div className='sign'>
                                <i
                                  className='fa fa-check-circle'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='room_state'>Còn trống</div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className='col-3 col-lg-2 p-2'>
                          <div className='py-2 px-3 disable room d-flex flex-column justify-content-between'>
                            <i className='fa fa-bed icon' aria-hidden='true' />
                            <div className='room_name py-1'>{room.name}</div>
                            <div className='pt-1 pb-1'>
                              <div className='sign'>
                                <i
                                  className='fa fa-check-circle-o'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='room_state'>Đã đặt</div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    room: state.room,
  };
};
RoomManagement.propTypes = {
  room: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { getAllRoom })(RoomManagement);

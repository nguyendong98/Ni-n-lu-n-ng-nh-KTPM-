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
      <h2 className='customermnm__title animate__animated animate__flip'>Room Status</h2>
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
        {roomcategory.map((category, key) => {
          return (
            <div className='row mt-5'>
              <div className='col-12 px-4 mb-2'>
                <div className='d-flex justify-content-between'>
                  <div className='col-4 col-lg-3 category_name p-2 px-3'>
                    <div className='line-top' />
                    <div className='line-bot' />
                    {category.name}
                  </div>
                  <div className='drop'>
                    <i
                      class={`fa fa-angle-down down-${key}`}
                      aria-hidden='true'
                      onClick={() => hideFunc(key)}
                    ></i>
                    <i
                      class={`fa fa-angle-right right-${key} hide`}
                      aria-hidden='true'
                      onClick={() => showFunc(key)}
                    ></i>
                  </div>
                </div>
              </div>
              <div className={`col-12 col-lg-12 row room toggle-${key}`}>
                {allroom.map((room, key) => {
                  if (room.kind === category._id) {
                    if (room.status === 'Empty') {
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

const hideFunc = (e) => {
  const element = document.querySelector('.toggle-' + e);
  const right = document.querySelector('.right-' + e);
  const down = document.querySelector('.down-' + e);
  element.classList.add('hide');
  right.classList.add('show');
  right.classList.remove('hide');
  down.classList.add('hide');
  down.classList.remove('show');
};

const showFunc = (e) => {
  const element = document.querySelector('.toggle-' + e);
  const down = document.querySelector('.down-' + e);
  const right = document.querySelector('.right-' + e);
  element.classList.remove('hide');
  down.classList.add('show');
  down.classList.remove('hide');
  right.classList.add('hide');
  right.classList.remove('show');
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

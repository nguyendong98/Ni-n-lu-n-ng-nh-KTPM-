import React, { Fragment, useEffect } from 'react';
import './Home.scss';
import h1 from './../../images/h1.jpg';
import h2 from './../../images/h2.jpg';
import h3 from './../../images/h3.jpg';
import { connect } from 'react-redux';
import { getAllKindOfRoom } from './../../actions/room';
import PropTypes from 'prop-types';
import RoomItem from './RoomItem';
import {setNotify} from './../../actions/notify'
import Spinner from '../../components/Spinner/Spinner'
import {Link, Redirect} from 'react-router-dom'


const Home = ({isAuthenticated, getAllKindOfRoom, room: { rooms, loading }, setNotify }) => {
  useEffect(() => {
    getAllKindOfRoom();
  }, [getAllKindOfRoom]);
  const checkAuth = (e) => {
    if(!isAuthenticated){
      e.preventDefault();
      setNotify('Please login if you want to book now !!!', 1500)
    }
    else{
      return <Redirect to="/booknow" exact />

    }
  }
  return loading  ? (<Spinner/>) : (
    
    <Fragment>
      <section className='slide-bar'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to={0}
              className='active'
            />
            <li data-target='#carouselExampleIndicators' data-slide-to={1} />
            <li data-target='#carouselExampleIndicators' data-slide-to={2} />
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={h2} className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={h1} className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={h3} className='d-block w-100' alt='...' />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </section>
      {/* check */}
      <form className='check'>
        <div className='container check-content'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <h6 className='check-title'>Check-in</h6>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text' id='basic-addon1'>
                        <i className='fa fa-calendar'  />
                      </span>
                    </div>
                    <input
                      type='date'
                      className='form-control'
                      placeholder='3/2/2020'
                      aria-label='Username'
                      aria-describedby='basic-addon1'
                      
                    />
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <h6 className=' check-title'>Check-out</h6>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text' id='basic-addon1'>
                        <i className='fa fa-calendar' aria-hidden='true' />
                      </span>
                    </div>
                    <input
                      type='date'
                      className='form-control'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='row'>
                <div className='col-12 col-lg-4'>
                  <h6 className=' check-title'>Child</h6>
                  <div className='input-group mb-3'>
                    <select
                      className='custom-select'
                      id='inputGroupSelect01'
                      defaultValue={0}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <h6 className=' check-title'>Adult</h6>
                  <div className='input-group mb-3'>
                    <select
                      className='custom-select'
                      id='inputGroupSelect01'
                      defaultValue={0}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <h6 className=' check-title' style={{ visibility: 'hidden' }}>
                    .
                  </h6>
                  <Link to="/booknow" exact="true" ><button className='btn btn-success' onClick={(e) => checkAuth(e)}>Book Now</button> </Link>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* penefit */}
      <section className='about'>
        <div className='container'>
          <span className='penefit-title mb-3'>WHY MANOIR DES ARTS ?</span>
          <div className='row'>
            <div className='col-12 col-lg-3 about-benefit mb-5'>
              <ul>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  Privileged location in Hai phong
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  Professional staffs, management
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  High standard service
                </li>
              </ul>
            </div>
            <div className='col-12 col-lg-3 about-benefit'>
              <ul>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  Bar &amp; coffee : Absorb in every sip
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  Delicious breakfast, fine dinning restaurant: Joy in every
                  bite.
                </li>
              </ul>
            </div>
            <div className='col-12 col-lg-3 about-benefit'>
              <ul>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />{' '}
                  Outside swimming pool &amp; garden
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  Old world charm
                </li>
                
              </ul>
            </div>
            <div className='col-12 col-lg-3 about-benefit'>
              <ul>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  On-site parking
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true' />
                  Free Wifi
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Gioi thieu */}
        <div className='about-image'>
          <div className='overlay'>
            <div className='content'>
              <span className='welcome'>Welcome to ...</span>
              <p>
                Spring Hotel is a hotel located in the west of Hanoi capital,
                surrounded by palm trees and lush greenery. Spring Hotel is a
                great destination and gives you the most enjoyable experience
                when you come to us.
              </p>
              <p>
                Come to Spring Hotel, you will be immersed in fresh nature, to
                participate in leisure activities, relax to take away the
                sorrows and chaos of life. Luxurious resort with all kinds of
                amenities and modern bungalows combined traditional style,
                Jacuzzi pool system with restaurant system, conference room,
                play area, restaurants ...
              </p>
              <p>
                Spring Hotel with fully furnished rooms and villas, interior
                space is decorated in luxurious style mixed with traditional
                Vietnamese and modern Western. We have well trained,
                professional and professional staff, dedicated service.s
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gioi thieu loai phong */}
      <section className='about-room'>
        <div className='container'>
          <span className='room-title'>ACCOMMODATION</span>
          <div className='row detail'>
            {
              rooms.map((val, index) => {
                return <RoomItem key={index} room={val} />;
              }
            )}
          </div>
        </div>
      </section>
      {/* partner */}
      <section className='feedback  pb-5'>
        <div className='feedback__title'>
          <h5>TESTIMONIALS</h5>
          <h2>What Customers Say?</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p className="feedback__text px-5">After a construction project took longer than expected, my husband, my daughter and I
                  needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                  city, neighborhood and the types of housing options available and absolutely love our
                  vacation at Sona Hotel.</p>
                  <div className="feedback__author">
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span> - Nguyễn Hoàng Đông</span>
                  </div>
                  <div className="feedback__img">
                    <img  src="https://colorlib.com/preview/theme/sona/img/testimonial-logo.png" alt="author"/>
                  </div>
                </div>
                <div className="carousel-item ">
                  <p className="feedback__text px-5">After a construction project took longer than expected, my husband, my daughter and I
                  needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                  city, neighborhood and the types of housing options available and absolutely love our
                  vacation at Sona Hotel.</p>
                  <div className="feedback__author">
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span> - Nguyễn Hoàng Đông</span>
                  </div>
                  <div className="feedback__img">
                    <img  src="https://colorlib.com/preview/theme/sona/img/testimonial-logo.png" alt="author"/>
                  </div>
                </div>
                <div className="carousel-item ">
                  <p className="feedback__text px-5">After a construction project took longer than expected, my husband, my daughter and I
                  needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                  city, neighborhood and the types of housing options available and absolutely love our
                  vacation at Sona Hotel.</p>
                  <div className="feedback__author">
                        <span><i className="fa fa-star" ></i></span>
                        <span><i className="fa fa-star" ></i></span>
                        <span><i className="fa fa-star" ></i></span>
                        <span><i className="fa fa-star" ></i></span>
                        <span><i className="fa fa-star" ></i></span>
                        <span> - Nguyễn Hoàng Đông</span>
                  </div>
                  <div className="feedback__img">
                    <img  src="https://colorlib.com/preview/theme/sona/img/testimonial-logo.png" alt="author"/>
                  </div>
                  
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        
      
      </section>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    room: state.room,
    isAuthenticated: state.auth.isAuthenticated
  };
};
Home.propTypes = {
  getAllKindOfRoom: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { getAllKindOfRoom, setNotify })(Home);

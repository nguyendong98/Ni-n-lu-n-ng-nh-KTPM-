import React, { Component } from 'react';
import './Home.scss';
class Home extends Component {
    render() {
        return (
            <div>
                <section className="slide-bar">
                    <div id="carouselExampleIndicators" className="carousel slide slide-bar" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src='./../../Spa.jpg' className="d-block w-100"  />
                            </div>
                            <div className="carousel-item">
                                <img src="./../../images/h2.jpg" className="d-block w-100"  />
                            </div>
                            <div className="carousel-item">
                                <img src="./../../../images/h3.jpg" className="d-block w-100"  />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                {/* check */}
                <section className="check">
                    <div className="container check-content">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <h6 className="check-title">Check-in</h6>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar"
                                                        aria-hidden="true" /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="3/2/2020" aria-label="Username"
                                                aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <h6 className=" check-title">Check-out</h6>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar"
                                                        aria-hidden="true" /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder
                                                aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <h6 className=" check-title">Child</h6>
                                        <div className="input-group mb-3">
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>0</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <h6 className=" check-title">Adult</h6>
                                        <div className="input-group mb-3">
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>0</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <h6 className=" check-title" style={{visibility: 'hidden'}}>.</h6>
                                        <button type="button" className="btn btn-success">Book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* penefit */}
                <section className="about">
                    <div className="container">
                        <span className="penefit-title mb-3">WHY MANOIR DES ARTS ?</span>
                        <div className="row">
                            <div className="col-12 col-lg-3 about-benefit">
                                <ul>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />Privileged location in Hai phong
                                    </li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />Professional staffs, management
                                    </li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />High standard service</li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 about-benefit">
                                <ul>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />Bar &amp; coffee : Absorb in every
                                        sip</li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />Delicious breakfast, fine dinning
                                        restaurant: Joy in every bite.</li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 about-benefit">
                                <ul>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Outside swimming pool &amp; garden
                                    </li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />Old world charm</li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" /> Modern comfort</li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 about-benefit">
                                <ul>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />On-site parking</li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true" />Free Wifi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Gioi thieu */}
                    <div className="about-image">
                        <div className="overlay" />
                        <div className="content">
                            <span className="welcome">Welcome to ...</span>
                            <p>Spring Hotel is a hotel located in the west of Hanoi capital, surrounded by palm trees and lush
                                greenery. Spring Hotel is a great destination and gives you the most enjoyable experience when you
                                come to us.</p>
                            <p>Come to Spring Hotel, you will be immersed in fresh nature, to participate in leisure activities,
                                relax to take away the sorrows and chaos of life.
                                Luxurious resort with all kinds of amenities and modern bungalows combined traditional style,
                                Jacuzzi pool system with restaurant system, conference room, play area, restaurants ...</p>
                            <p>Spring Hotel with fully furnished rooms and villas, interior space is decorated in luxurious style
                                mixed with traditional Vietnamese and modern Western. We have well trained, professional and
                                professional staff, dedicated service.s</p>
                            <button type="button" className="btn btn-success">See more</button>
                        </div>
                    </div>
                </section>
                {/* Gioi thieu loai phong */}
                <section className="about-room">
                    <div className="container">
                        <span className="room-title">ACCOMMODATION</span>
                        <div className="row detail">
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <img src="./../../images/about-room.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title title">DELUXE ROOM</h5>
                                        <p className="card-text detail-text">Deluxe rooms with harmonious design, luxurious interior
                                            with full modern facilities. Area of about 60-65m2 each room is equipped with windows
                                            and balcony.</p>
                                        <a href="#" className="btn btn-success">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <img src="./../../images/about-room2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title title">SUPERIOR ROOM</h5>
                                        <p className="card-text detail-text">Standard rooms are about 20m2 are designed in harmony
                                            with luxury furniture and full of modern facilities and to the comfort and convenience.
                                        </p>
                                        <a href="#" className="btn btn-success">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <img src="./../../images/about-room3.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title title">PRESIDENT ROOM</h5>
                                        <p className="card-text detail-text">Luxury bungalow with elegant architecture and interior
                                            with bright white tone combined with natural space, windswept will bring you a true
                                            holiday..</p>
                                        <a href="#" className="btn btn-success">See more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* partner */}
                <section className="partner">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
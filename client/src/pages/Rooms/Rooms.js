import React from 'react'
// import PropTypes from 'prop-types'
import './Rooms.scss'

const Rooms = props => {
    return (
        <section className="rooms">
            <h2 className="rooms__title">Our Rooms</h2>
            <div className="rooms__menu">
                <span>Home</span>
                <i className="fa fa-chevron-right" ></i>
                <span className="rooms__menu-home">Rooms</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card" >
                            <img className="card-img-top" src="https://colorlib.com/preview/theme/sona/img/room/room-4.jpg" alt="Cardimagecap" />
                            <div className="card-body">
                                <h5 className="card-title">Premium King Room</h5>
                                <h3 className="card-price">159$<span>/Pernight</span></h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="r-0">Size:</td>                                       
                                            <td>30 ft</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Capacity:</td>                                       
                                            <td>Max persion 3</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Bed:</td>                                       
                                            <td>King Beds</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Services:</td>                                       
                                            <td>Wifi, Televison,<br/> Bathroom, ...</td> 
                                        </tr>
                                    </tbody>
                                </table>

                                <a href="#/" className="card-details" >MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 col-12">
                        <div className="card" >
                            <img className="card-img-top" src="https://colorlib.com/preview/theme/sona/img/room/room-2.jpg" alt="Cardimagecap" />
                            <div className="card-body">
                                <h5 className="card-title">Premium King Room</h5>
                                <h3 className="card-price">159$<span>/Pernight</span></h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="r-0">Size:</td>                                       
                                            <td>30 ft</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Capacity:</td>                                       
                                            <td>Max persion 3</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Bed:</td>                                       
                                            <td>King Beds</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Services:</td>                                       
                                            <td>Wifi, Televison,<br/> Bathroom, ...</td> 
                                        </tr>
                                    </tbody>
                                </table>

                                <a href="#/" className="card-details" >MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 col-12">
                        <div className="card" >
                            <img className="card-img-top" src="https://colorlib.com/preview/theme/sona/img/room/room-5.jpg" alt="Cardimagecap" />
                            <div className="card-body">
                                <h5 className="card-title">Premium King Room</h5>
                                <h3 className="card-price">159$<span>/Pernight</span></h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="r-0">Size:</td>                                       
                                            <td>30 ft</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Capacity:</td>                                       
                                            <td>Max persion 3</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Bed:</td>                                       
                                            <td>King Beds</td> 
                                        </tr>
                                        <tr>
                                            <td className="r-0">Services:</td>                                       
                                            <td>Wifi, Televison,<br/> Bathroom, ...</td> 
                                        </tr>
                                    </tbody>
                                </table>

                                <a href="#/" className="card-details" >MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#/">1</a></li>
                <li className="page-item"><a className="page-link" href="#/">2</a></li>
                <li className="page-item"><a className="page-link" href="#/">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
            
        </section>
    )
}

// Rooms.propTypes = {

// }

export default Rooms

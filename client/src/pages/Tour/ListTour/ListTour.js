import React, { Component } from 'react';

class ListTour extends Component {
    render() {
        return (
            <div className="col-lg-4 col-12 pb-5">
                <div className="card p-1">
                    <img src="http://springhotel.webhotel.vn/files/images/tours/Tour%20%C4%90%C3%A0%20l%E1%BA%A1t%20-%201.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tour du lịch Hà Nội - Đà Lạt</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    </div>                                
                    <div className="card-body">
                        <a href="#/" className="card-link">Xem chi tiết</a>
                    </div>
                </div>                            
            </div> 
        );
    }
}

export default ListTour;
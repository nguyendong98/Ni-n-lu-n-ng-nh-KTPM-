import React, { Component } from 'react';
import './Tour.scss'
import ListTour from './ListTour';
class Tour extends Component {

    
    render() {
        return (
            <section className="Tour">
                <div className="Tour__banner">
                    <div className="Tour__banner-context">
                        Tours
                    </div>
                </div>
                <div className="Tour__container pt-5 pb-5">
                    <div className="container ">
                        <div className="row ">
                            <ListTour></ListTour>
                            <ListTour></ListTour>
                            <ListTour></ListTour>
                                                   
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Tour;
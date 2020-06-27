import React from 'react'
import './Footer.scss'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
 function Footer({auth, room, statistical }) {
    return  room.loading ? null :  (
        <footer className="container-fluid footer">
            <h3 className="footer__title">SPRING HOTEL</h3>
            <p className="footer__address">Tầng 4, số 132, quận Ninh Kiều, Cần Thơ</p>
            <div className="row footer__contact">
                <div className="footer__contact-tag col-6">
                    <a href="#/" className="footer-info">info@webhotel.vn</a>
                </div>
                <div className="footer__contact-phone col-6">
                    <a href="#/" className="footer-info">(035)486010 </a>
                </div>
            </div>
            <div className="row footer__social">
                <a href="#/"><i className="fa fa-facebook" /></a>
                <a href="#/"><i className="fa fa-twitter"  /></a>
                <a href="#/"><i className="fa fa-instagram" /></a>
                <a href="#/"><i className="fa fa-youtube" /></a>
            </div>
            <div className="row footer__end">        
                <a className="footer__end-link" href="#/">Liên hệ</a>
                <a className="footer__end-link" href="#/">Điều kiện &amp; điều khoản</a>
                <a className="footer__end-link" href="#/">Tin tức</a>
                <a className="footer__end-link" href="#/">Vị trí &amp; chỉ đường</a>
            </div>
        </footer>
    )
}
Footer.propTypes = {
    room: PropTypes.object.isRequired,
    
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        room: state.room,
        statistical: state.statistical
    }
}
export default connect(mapStateToProps, null)(Footer)

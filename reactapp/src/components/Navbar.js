import React, { Component } from 'react'
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to= "/" className="navbar-brand" >Exertracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to = "/" className="nav-link" >Exercise </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/create" className="nav-link" >Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/user" className="nav-link" >Create User</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        )
    }
}

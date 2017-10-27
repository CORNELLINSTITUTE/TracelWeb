import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Cookies from "universal-cookie";
import history from "../history";
import default_user from '../../images/default_user.jpeg';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            cookies: new Cookies(),
        };
    }

    /**********************/
    //FUNCTIONS
    /**********************/
    //Clean cookie session of user
    SignOut() {
        this.state.cookies.remove('username');
        history.push('/');
    }

    /**********************/
    //TEMPLATE
    /**********************/
    render() {
        const isLoggedIn = this.state.cookies.get('username') != undefined ? true : false;
        return (
            <div>
                <div className="navbar-wrapper">
                    <div className="container-fluid">
                        <nav className="navbar navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">Logo</a>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><a href="#">Home</a></li>
                                        <li className=" dropdown">
                                            <a href="#" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Flights<span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li className=" dropdown">
                                                    <a href="#" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View Departments</a>
                                                </li>
                                                <li><a href="#">Add New</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Hotels</a></li>
                                        <li className=" dropdown"><a href="#" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Rent a Car<span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">View Managers</a></li>
                                                <li><a href="#">Add New</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav pull-right hide-on-med-and-down navbar-right">
                                        <li className="dropdown">
                                            {isLoggedIn ? (
                                                <a className="dropdown-toggle pointer" data-toggle="dropdown">{this.state.cookies.get('username')}</a>
                                            ) : (
                                                    <Link to={'/login'} >Sign In</Link>
                                            )}
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <div className="navbar-content">
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <img src={default_user} alt="Default User" className="img-responsive" />
                                                                <p className="text-center small">
                                                                    <a href="#">Change Photo</a></p>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <span>{this.state.cookies.get('email')}</span>
                                                                <p className="text-muted small">
                                                                    {this.state.cookies.get('name')}</p>
                                                                <div className="divider">
                                                                </div>
                                                                <a href="#" className="btn btn-primary active">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="navbar-footer">
                                                        <div className="navbar-footer-content">
                                                            <div className="row">
                                                                <div className="col-md-12 right">
                                                                    <a onClick={this.SignOut.bind(this)} className="btn btn-danger btn-size">Sign Out</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

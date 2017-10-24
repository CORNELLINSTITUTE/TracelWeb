import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Cookies from "universal-cookie";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookies: new Cookies()
        };
    }

    /**********************/
    //FUNCTIONS
    /**********************/
    //Check if the user is logged in
    Login() {
        let username = this.state.cookies.get('username')

        if (username == null)
            return 'Login'
        else
            return username;
    }

    //Clean cookie session of user
    SignOut(){
        this.state.cookies.remove('username');
        // this.props.history.push('/');
    }

    /**********************/
    //TEMPLATE
    /**********************/
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="navbar-wrapper">
                                <div class="container">
                                    <div class="navbar navbar-inverse navbar-static-top" role="navigation">
                                        <div class="container">
                                            <div class="navbar-header">
                                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                    <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span><span
                                                        class="icon-bar"></span><span class="icon-bar"></span>
                                                </button>
                                                <a class="navbar-brand" href="#">Project name</a>
                                            </div>
                                            <div class="navbar-collapse collapse">
                                                <ul class="nav navbar-nav">
                                                    <li><a href="#">Home</a></li>
                                                </ul>
                                                <ul class="nav navbar-nav navbar-right">
                                                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Account
                                                    <b class="caret"></b></a>
                                                        <ul class="dropdown-menu">
                                                            <li>
                                                                <div class="navbar-content">
                                                                    <div class="row">
                                                                        <div class="col-md-5">
                                                                            <img src="http://placehold.it/120x120"
                                                                                alt="Alternate Text" class="img-responsive" />
                                                                            <p class="text-center small">
                                                                                <a href="#">Change Photo</a></p>
                                                                        </div>
                                                                        <div class="col-md-7">
                                                                            <span>{this.state.cookies.get('username')}</span>
                                                                            <p class="text-muted small">
                                                                                mail@gmail.com</p>
                                                                            <div class="divider">
                                                                            </div>
                                                                            <a href="#" class="btn btn-primary active">View Profile</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="navbar-footer">
                                                                    <div class="navbar-footer-content">
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <a href="#" class="btn btn-default">Change Passowrd</a>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <button onClick={this.SignOut()} class="btn btn-default pull-right">Sign Out</button>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

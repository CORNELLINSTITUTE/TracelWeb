import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import history from "../history";
import { Link } from "react-router-dom";
import './Login.css';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            cookies: new Cookies(),
            toogleBtn: false,
            recoverPassword: 'pr-wrap'
        };
    }

    /**********************/
    //FUNCTIONS
    /**********************/
    login(login) {
        axios.request({
            method: 'get',
            url: 'http://localhost:4000/user/login?username=' + login.username + '&password=' + login.password,
            data: login
        }).then(response => {
            //User found
            if (response.data.length !== 0) {
                //Add information of the user to cookie
                this.state.cookies.set('username', response.data[0].username, { path: '/' });
                this.state.cookies.set('email', response.data[0].personDetails[0].email, { path: '/' });

                //Redirects the user to home page
                history.push('/');
            }
            else {
                alert('Username or password invalid!');
            }
            // this.setState({users: response.data}, () => {
            //     console.log(this.state);
            // })
        }).catch(err => console.log(err));
    }

    //Submit the login of the user
    onSubmit(e) {
        const login = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        this.login(login);

        e.preventDefault();
    }

    //Displays the modal to recover the password
    RecoverPassword() {
        if (this.state.toogleBtn == false)
            this.setState({ recoverPassword: "pr-wrap" });
        else
            this.setState({ recoverPassword: "show-pass-reset" });

        //Change the state of the button
        this.setState({ toogleBtn: !this.state.toogleBtn });
    }

    /**********************/
    //TEMPLATE
    /**********************/
    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Recover password */}
                            <div className={this.state.recoverPassword}>
                                <div className="pass-reset">
                                    <label>
                                        Enter the email you signed up with</label>
                                    <input type="email" placeholder="Email" />
                                    <input type="submit" value="Submit" className="pass-reset-submit btn btn-success btn-sm" />
                                </div>
                            </div>
                            <div className="wrap">
                                <p className="form-title">Sign In</p>
                                <form className="login" onSubmit={this.onSubmit.bind(this)}>
                                    <div className="input-field">
                                        <label htmlFor="name">Username</label>
                                        <input type="text" name="username" ref="username" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="email">Password</label>
                                        <input type="password" name="password" ref="password" />
                                    </div>
                                    <input type="submit" value="Sign In" className="btn btn-success btn-sm" />
                                    <div className="remember-forgot">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <Link to={'/person/add'}>Create account</Link>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 forgot-pass-content">
                                                <a href="#" onClick={this.RecoverPassword.bind(this)} className="forgot-pass">Forgot Password</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

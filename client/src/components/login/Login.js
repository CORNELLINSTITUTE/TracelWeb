import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Cookies from "universal-cookie";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
             cookies: new Cookies()
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
                //Add username to cookie
                this.state.cookies.set('username', response.data[0].username, {path:'/'});

                //Redirects the user to home page
                this.props.history.push('/');
            }
            // this.setState({users: response.data}, () => {
            //     console.log(this.state);
            // })
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const login = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        this.login(login);

        e.preventDefault();
    }


    /**********************/
    //TEMPLATE
    /**********************/
    render() {
        return (
            <div className="Login">
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="input-field">
                            <input type="text" name="username" ref="username" />
                            <label htmlFor="name">Username</label>
                        </div>
                        <div className="input-field">
                            <input type="password" name="password" ref="password" />
                            <label htmlFor="email">Password</label>
                        </div>
                        <input type="submit" value="Login" className="btn" />
                    </form>
                </div>
            </div>
        );
    }
}

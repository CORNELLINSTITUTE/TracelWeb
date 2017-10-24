import React, { Component } from 'react';
import axios from 'axios';
import './Person.css';
import history from "../history";
// import { Link } from 'react-router-dom';

export default class AddPerson extends Component {
    /**********************/
    //FUNCTIONS
    /**********************/
    addPerson(newPerson) {
        axios.request({
            method: 'post',
            url: 'http://localhost:4000/person/add',
            data: newPerson
        }).then(response => {
            history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const newPerson = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            country: this.refs.country.value,
            date_of_birth: this.refs.date_of_birth.value,
            phone: this.refs.phone.value,
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        this.addPerson(newPerson);
        e.preventDefault();
    }



    /**********************/
    //TEMPLATE
    /**********************/
    render() {
        return (
            <div className="container">
                <div className="row main">
                    <div className="main-login main-center">
                        <h5>Register to our website to book your trip.</h5>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            {/* NAME */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" ref="name" name="name" id="name" placeholder="Enter your Name" />
                                    </div>
                                </div>
                            </div>
                            {/* EMAIL */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" ref="email" name="email" id="email" placeholder="Enter your Email" />
                                    </div>
                                </div>
                            </div>
                            {/* COUNTRY */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" ref="country" name="country" id="country" placeholder="Enter your country" />
                                    </div>
                                </div>
                            </div>
                            {/* DATE OF BIRTH */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" ref="date_of_birth" name="date_of_birth" id="date_of_birth" placeholder="Enter your Date of Birth" />
                                    </div>
                                </div>
                            </div>
                            {/* PHONE */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" ref="phone" name="phone" id="phone" placeholder="Enter your Phone" />
                                    </div>
                                </div>
                            </div>
                            {/* USERNAME */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" ref="username" name="username" id="username" placeholder="Enter your Username" />
                                    </div>
                                </div>
                            </div>
                            {/* PASSWORD */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" ref="password" name="password" id="password" placeholder="Enter your Password" />
                                    </div>
                                </div>
                            </div>
                            {/* CONFIRM PASSWORD */}
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Add" className="btn btn-success btn-lg btn-wrap" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
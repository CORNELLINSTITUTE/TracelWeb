import React, {Component} from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class AddPerson extends Component {
    /**********************/
    //FUNCTIONS
    /**********************/
    addPerson(newPerson){
        axios.request({
            method:'post',
            url:'http://localhost:4000/person/add',
            data: newPerson
        }).then(response => {
            this.props.history.push('/');
                // console.log(response);
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newPerson = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            country: this.refs.country.value,
            date_of_birth: this.refs.date_of_birth.value,
            phone: this.refs.phone.value,
            username:this.refs.username.value,
            password:this.refs.password.value
        }

        this.addPerson(newPerson);  
        //console.log(newPerson);
        e.preventDefault();
    }
    
    /**********************/
    //TEMPLATE
    /**********************/
    render(){
        return (
            <div>
                <h1>Add Person</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name"/>
                        <label htmlFor="name">Name</label>
                    </div>   
                    <div className="input-field">
                        <input type="text" name="email" ref="email"/>
                        <label htmlFor="email">Email</label>
                    </div>    
                    <div className="input-field">
                        <input type="text" name="country" ref="country"/>
                        <label htmlFor="country">Country</label>
                    </div>    
                    <div className="input-field">
                        <input type="text" name="date_of_birth" ref="date_of_birth"/>
                        <label htmlFor="date_of_birth">Date of Birth</label>
                    </div>    
                    <div className="input-field">
                        <input type="text" name="phone" ref="phone"/>
                        <label htmlFor="phone">Phone</label>
                    </div>    
                    <div className="input-field">
                        <input type="text" name="username" ref="username"/>
                        <label htmlFor="username">Username</label>
                    </div>    
                    <div className="input-field">
                        <input type="text" name="password" ref="password"/>
                        <label htmlFor="password">Password</label>
                    </div>    
                    <input type="submit" value="Add" className="btn"/>
                </form>
            </div>
        )
    }
}
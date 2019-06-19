import React, { Component } from 'react';
import logo from '../../logo.svg';
import {Redirect} from 'react-router-dom'
import {PostData} from '../../services/PostData'
import './Register.css';

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            redirectToRefererrer: false
        }
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) =>{
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state);
    }

    register(){
        var userData = {
            username: this.state.username,
            password: this.state.password
        }
        PostData('register', userData).then((result) =>{
            if(result.code === 0){
                alert("Registration success!");
            } else{
                alert("Something wrong!");
            }
            let myString = JSON.stringify(result);
            alert(myString);
        })
    }

    render(){
        if (sessionStorage.getItem('authToken')) {
            return (<Redirect to={'/home'}/>)
        }
        return (
        <div className="App">
            <header className="App-header">
                <h1 align="center">REGISTER</h1>
                <h2 align="center">ITB NIM Finder</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <form onSubmit = {this.register}>
                    <input 
                        name="username"
                        placeholder="Enter new username..."
                        type="text"
                        maxLength = "20"
                        onChange={this.onChange}
                    />
                    <input
                        name="password"
                        placeholder="Enter new password..."
                        type="password"
                        onChange={this.onChange}
                    />
                    <br />
                    <input type="submit" value="Register"/>
                </form>
                <p align="center">
                    Masukkan username dan password baru Anda<br />
                    Sudah punya akun? <a href="/login">Login di sini</a>
                </p>
            </header>
        </div>
        );
    }
}

export default Register;
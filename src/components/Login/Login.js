import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {PostData} from '../../services/PostData'
import logo from '../../logo.svg';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            redirectToRefererrer: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) =>{
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state);
    }

    login(){
        var userData = {
            username: this.state.username,
            password: this.state.password
        }
        PostData('login', userData).then((result) =>{
            if(result.code === 0){
                sessionStorage.setItem('authToken',JSON.stringify(result.token));
                this.setState({redirectToRefererrer: true});
            } else{
                alert("Something wrong!");
            }
            let myString = JSON.stringify(result);
            alert(myString);
        })
    }

    render(){
        if ((sessionStorage.getItem('authToken')) || (this.state.redirectToReferrer)) {
            return (<Redirect to={'/home'}/>)
        }

        return (
        <div className="App">
            <header className="Login-header">
                <h2 align="center">ITB NIM Finder</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <form onSubmit = {this.login}>
                    <input 
                        name="username"
                        placeholder="Enter username..."
                        type="text"
                        maxLength = "20"
                        onChange={this.onChange}
                    />
                    <input
                        name="password"
                        placeholder="Enter password..."
                        type="password"
                        onChange={this.onChange}
                    />
                    <br />
                    <input type="submit" value="Login"/>
                </form>
                <p align="center">
                    Masukkan username dan password.<br />
                    Belum daftar? <a href="register" className="App-link">Daftar di sini</a>
                </p>
            </header>
        </div>
        );
    }
}

export default Login;
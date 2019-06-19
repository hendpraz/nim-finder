import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Welcome.css';
import {Redirect} from 'react-router-dom'

class Welcome extends Component {
    render(){
        if (sessionStorage.getItem('authToken')) {
            return (<Redirect to={'/home'}/>)
        }
        return (
        <div className="App">
            <header className="App-header">
                <h2 align="center">ITB NIM Finder - Hendpraz</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <a href="/login" className="button">Login</a>
                <a href="/register" className="button2">Register</a>
            </header>
        </div>
        );
    }
}

export default Welcome;
import React, { Component } from 'react';
import './Home.css';
import logo from '../../logo.svg';
import {Redirect} from 'react-router-dom'
import { GetData } from '../../services/GetData';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            data: [],
            redirectToReferrer: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.logout = this.logout.bind(this);
    }

    // Lifecycle
    componentWillMount(){
        if(!(sessionStorage.getItem("authToken"))){
            this.setState({redirectToReferrer: true});
        }
    }

    onChange = (event) =>{
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state);
    }

    onSearch = event => {
        event.preventDefault();
    
        const query = this.state.query;
        var queryURL = 'https://api.stya.net/nim/';

        if (query === '') {
          return;
        }
    
        var ord = query.charCodeAt(0) - "0".charCodeAt(0);
        if((ord >= 0) && (ord <= 9)){
            queryURL = queryURL + 'byid?query=';
        } else{
            queryURL = queryURL + 'byname?name=';
        }
        queryURL = queryURL + query + '&count=2'; // Change this later
        const token = sessionStorage.getItem("authToken");
        GetData(queryURL, token).then((result) =>{
            var responseJson = result;
            var resCode = responseJson.code;
            if(resCode === -2){
                alert("Something wrong!");
                alert(queryURL);
                //this.setState({redirectToReferrer: true});
            } else{
                alert("Success!");
            }
            var myString = JSON.stringify(responseJson);
            alert(myString);
        });
    };

    logout(){
        sessionStorage.setItem("authToken",'');
        sessionStorage.clear();
        this.setState({redirectToReferrer: true});
    }

    render(){
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
        }
        
        return (
        <div className="App">
            <header className="Home-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 align="center">ITB NIM Finder</h2>
                <form onSubmit = {this.onSearch}>
                    <input 
                        name="query"
                        placeholder="Masukkan Nama/NIM"
                        type="text"
                        onChange={this.onChange}
                    />
                    <br />
                    <input type="submit" value="Search"/>
                </form>
                <p align="center">
                    Masukkan angka saja atau huruf saja<br />
                    Contoh "Hendry", "13517105"<br />
                </p>
                <button onClick = {this.logout}>Logout</button>
            </header>
        </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom'
import { GetData } from '../../services/GetData';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            redirectToReferrer: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.generateTableHead = this.generateTableHead.bind(this);
        this.generateTable = this.generateTable.bind(this);
        this.tableCreate = this.tableCreate.bind(this);
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

    generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    }

    generateTable(table, cols) {
        for (let element of cols) {
            let row = table.insertRow();
            for (let key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    tableCreate(data){
        let table = document.querySelector("table");
        let cols = Object.keys(data[0]);
        this.generateTable(table, data); // generate the table first
        this.generateTableHead(table, cols); // then the head
    }

    onSearch = event => {
        event.preventDefault();
    
        const query = this.state.query;
        var queryURL = 'https://api.stya.net/nim/';


        //Clear table
        var parent = document.getElementById("tableID");
        while(parent.hasChildNodes())
        {
            parent.removeChild(parent.firstChild);
        }

        document.getElementById("notfound").innerHTML = "";

        if (query === '') {
          return;
        }
    
        var ord = query.charCodeAt(0) - "0".charCodeAt(0);
        if((ord >= 0) && (ord <= 9)){
            queryURL = queryURL + 'byid?query=';
        } else{
            queryURL = queryURL + 'byname?name=';
        }
        queryURL = queryURL + query + '&count=10'; // Change this for other option
        const token = sessionStorage.getItem("authToken");
        GetData(queryURL, token).then((result) =>{
            var responseJson = result;
            if(responseJson.status !== "OK"){
                alert("Something wrong!");
                let myString = JSON.stringify(result);
                alert(myString);
                //this.setState({redirectToReferrer: true});
            } else{
                let payload = responseJson.payload;
                var data = [];
                for (var i=0;i<payload.length;i++) {
                    data.push(JSON.parse(JSON.stringify(payload[i])));
                    console.log(data[i]);
                }
                if(data.length === 0){
                    document.getElementById("notfound").innerHTML = "Tidak ada hasil yang ditemukan!";
                } else{
                    this.tableCreate(data);
                }
            }
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
        <div className="Home" background-color="#282c34">
            <header className="Home-header">
                <h2 align="center">ITB NIM Finder</h2>
            </header>
            <body className="Home-body">
                <form onSubmit = {this.onSearch}>
                    <input 
                        name="query"
                        placeholder="Masukkan Nama/NIM"
                        type="text"
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search"/>
                </form>
                <p id="notfound">

                </p>
                <table id="tableID">
                    
                </table>
            </body>
            <footer className="Home-footer">
                    Masukkan Nama atau NIM. Salah satu saja<br />
                    Contoh "Hendry", "13517105"<br />
                    <button onClick = {this.logout}>Logout</button>
            </footer>
        </div>
        );
    }
}

export default Home;
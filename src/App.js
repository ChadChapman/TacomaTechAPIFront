import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import LandingExpansionPanel from './components/LandingExpansionPanel'
import HeaderAppBar from "./components/HeaderAppBarClass";

import logo from './logo.svg';


class App extends Component {

//   componentDidMount() {
//     //this.getListings();
//     this.getBizListings();
//     this.getCityListings();
//     this.getEduListings();
//     this.getEventListings();
//     this.getTechGroupListings();
// }

componentDidUpdate() {
    console.log("App updated");
}

/*
    Load category info for the "landing page" render the user will see first, also
    serves as the "home page" for the app.
    Much thanks to Gavin for getting me straightened out here and getting the listings []
    loaded properly!
 */
getListings = async () => {
    // Get the listings and store them in state
    try {
        const data = await fetch('/api');
        const prettyData = await data.json();
        //console.log(prettyData.roots);
        this.setState({ listings: prettyData.roots })
    }
    catch (error) {
        console.log('error', error);
    }
};

getTechGroupListings = async () => {
    // Get the listings and store them in state
    try {
        const data = await fetch('/groups');
        const prettyData = await data.json();
        //console.log(prettyData.roots);
        this.setState({ groupListings: prettyData.groupListings })
    }
    catch (error) {
        console.log('error', error);
    }
};

getEventListings = async () => {
    // Get the listings and store them in state
    try {
        const data = await fetch('/events');
        const prettyData = await data.json();
        //console.log(prettyData.roots);
        this.setState({ eventListings: prettyData.eventsListings })
    }
    catch (error) {
        console.log('error', error);
    }
};

getEduListings = async () => {
    // Get the listings and store them in state
    try {
        const data = await fetch('/education');
        const prettyData = await data.json();
        //console.log(prettyData.roots);
        this.setState({ eduListings: prettyData.edulisting })
    }
    catch (error) {
        console.log('error', error);
    }
};

getCityListings = async () => {
    // Get the listings and store them in state
    try {
        const data = await fetch('/city');
        const prettyData = await data.json();
        //console.log(prettyData.roots);
        this.setState({ cityListings: prettyData.cityListings })
    }
    catch (error) {
        console.log('error', error);
    }
};

getBizListings = async () => {
    try {
        const data = await fetch('/business');
        const prettyData = await data.json();
        //console.log(prettyData.bizListings);
        this.setState({ bizListings: prettyData.bizListings })
    }
    catch (error) {
        console.log('error', error);
    }
};


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
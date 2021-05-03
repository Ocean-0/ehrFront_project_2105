import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Navbar from './component/Navbar'
import Header from './component/Header'

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">
        <BrowserRouter> 
          <Navbar/>      
          <Header/>
        </BrowserRouter>  
      </div>
    );
  }

}

export default App;

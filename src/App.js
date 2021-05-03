import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Navbar from './component/Navbar'

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">
        <BrowserRouter> 
          <Navbar/>      

        </BrowserRouter>  
      </div>
    );
  }

}

export default App;

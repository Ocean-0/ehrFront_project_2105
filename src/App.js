import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Navbar from './component/Navbar'
import Header from './component/Header'
import Home from './component/Home'

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">
        <BrowserRouter> 
          <Navbar/>      
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
          </Switch>

        </BrowserRouter>  
      </div>
    );
  }

}

export default App;

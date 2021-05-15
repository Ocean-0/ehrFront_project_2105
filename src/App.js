import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {observer} from 'mobx-react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Home from './component/Home'

import './App.css';

@observer
class App extends Component{
  componentDidMount(){
    console.log('App didMount:'+this.props.loginAccount,':::',this.props);
    this.props.store.loginAcc = this.props.loginAccount;
  }
  render(){
    console.log('App props:'+this.props.loginAccount,':::',this.props);
    return (
      <div className="App">
        <BrowserRouter> 
          <Navbar/>      
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            {/* <Route path='/user' component={Home} />
            <Route path='/user/home' component={Home} /> */}
          </Switch>

        </BrowserRouter>  
      </div>
    );
  }

}

export default App;

import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {observer,inject,Provider} from 'mobx-react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Home from './component/Home'
import Singleton  from './public/cache/Singleton'
import DataContainer from './public/cache/DataContainer'
import BasicBrowse from './container/basic/BasicBrowse'

import './App.css';

@observer
@inject('dataContainer')
class App extends Component{
  componentDidMount(){
    console.log('App didMount:'+this.props.loginAccount,':::',this.props);
    this.props.dataContainer.setLoginAccount(this.props.loginAccount);
  }
  render(){
    console.log('App props:'+this.props.loginAccount,':::',this.props);
    return (
      <div className="App">
        <BrowserRouter> 
          <Navbar/>      
          <Header />
          <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            <Route path='/basicBrowse'>
                <BasicBrowse />
            </Route>
            {/* <Route path='/home' component={Home}/> */}
          </Switch>

        </BrowserRouter>  
      </div>
    );
  }

}

export default App;

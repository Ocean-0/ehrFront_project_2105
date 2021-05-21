import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {observer,inject,Provider} from 'mobx-react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Home from './component/Home'
import Singleton  from './public/cache/Singleton'
import DataContainer from './public/cache/DataContainer'
import BasicBrowse from './container/basic/BasicBrowse'
import BasicUpdate from './container/basic/BasicUpdate'
import BasicQuery from './container/basic/BasicQuery'
import AnAbility from './container/analysis/AnAbility'
import AttBrowse from './container/attendance/AttBrowse'
import NoticeBrowse from './container/notice/NoticeBrowse'

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
          <Header history={this.props.history}/>
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
            <Route path='/basicUpdate'>
                <BasicUpdate />
            </Route>
            <Route path='/basicQuery'>
                <BasicQuery />
            </Route>
            <Route path='/attBrowse'>
                <AttBrowse />
            </Route>
            <Route path='/anAbility'>
                <AnAbility />
            </Route>
            <Route path='/noticeBrowse'>
                <NoticeBrowse />
            </Route>
          </Switch>

        </BrowserRouter>  
      </div>
    );
  }

}

export default App;

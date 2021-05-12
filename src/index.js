import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import App from './App';
import Main from './container/Main'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Main/>
    {/* <BrowserRouter> 
      <Redirect exact from='/user' to='/login' />
      <Switch>
        <Route exact path='/login' component={Main} />
        <Route exact path='/user' component={App} />
      </Switch>
    </BrowserRouter>    */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

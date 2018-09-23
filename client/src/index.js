import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './components/Navbar';

ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route exact path="/" render={(props) => {
        return <Login {...props} /> }}/>
        <Route exact path="/login" render={(props) => {
        return <Login {...props} /> }}/>
        <Route exact path="/authenticated/:access_token/:refresh_token" render={(props) => {
        return <span><Navbar {...props}/><Dashboard {...props}/></span> }}/>
      </Switch>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

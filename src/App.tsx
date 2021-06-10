import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dasboard';
import Users from './pages/users/Users';
import UserEdit from "./pages/users/UserEdit";
import Projects from './pages/projects/Projects';
import Register from './pages/Register';
import Login from './pages/Login';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Route path={'/'} exact component={Dashboard} />
            <Route path={'/users'} exact component={Users} />
            <Route path={'/users/:id/edit'} component={UserEdit}/>
            <Route path={'/projects'} component={Projects} />
            <Route path={'/register'} component={Register} />   
            <Route path={'/login'} component={Login} />     
      </BrowserRouter>
    </div>
  );
}

export default App;

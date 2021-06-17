import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dasboard';
import Users from './pages/users/Users';
import UserEdit from "./pages/users/UserEdit";
import UserCreate from "./pages/users/UserCreate";
import Projects from './pages/projects/Projects';
import ProjectEdit from './pages/projects/ProjectEdit';
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
            <Route path={'/users/create'} component={UserCreate}/>
            <Route path={'/projects'} exact component={Projects} />
            <Route path={'/projects/:id/edit'} component={ProjectEdit}/>
            <Route path={'/register'} component={Register} />   
            <Route path={'/login'} component={Login} />     
      </BrowserRouter>
    </div>
  );
}

export default App;

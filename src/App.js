import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header/Header.js";
import Get from "./Components/Get/Get.js";
import Films from "./Components/FilmDemo/Films.js";
import Post from "./Components/Post/Post.js";
import User from "./Components/User/User.js";
import Login from "./Components/Login/Login.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Get} />
          <Route path="/film"  component={Films} />
          <Route path="/post" component={Post} />
          <Route path="/users" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/:user_id" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }  
}
export default App;



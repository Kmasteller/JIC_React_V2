import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
// import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Tour from "./Pages/Tour";
import Add from "./Pages/Add";
import Main from "./Pages/Main";
import Resource from "./Pages/Resource";
import axios from 'axios';
import './App.css';

class App extends Component {
 state = {
    user: {
      loggedIn: false,
      isAdmin: false,
      currentUser: {
        id: null,
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  }
  
  componentDidMount() {
    this.checkLogin()
    console.log(this.state, "Component did mount")
  }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is check logging state")
      console.log(res, "logging state res")
      this.setState({ user: res.data});
      console.log(this.state, "logging state this state")
    })
  }
  
  userDidLogin = (userData) => {
    console.log(userData, "user did login")
    axios.post("/api/login", userData).then((res) => {
      console.log(res, "user did login res")
      this.checkLogin()
    })
  }

  userDidAdd = (userData) => {
    console.log(userData)
    axios.post("/api/add", userData).then((res) => {
      console.log(res)
      this.checkLogin()
    })
  }

  userDidSignup = (userData) => {
    console.log(userData, "userdata from userdidsignup")
    axios.post("/api/signUp", userData).then((res) => {
      console.log(res, "from signup")
      this.checkLogin()
    })
  }

  userLogOut = () => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
    })
  }
  
  render() {
    return (
       <Router>
        <div>
          {/* <Nav userInfo={this.state.user} logout={this.userLogOut}/> */}
          <Switch>  
            <Route exact path="/" render={() => <Home handleSignup={this.userDidSignup} handleLogin={this.userDidLogin} /> }/>
            <Route exact path="/tour" render={() => <Tour handleLogout={this.userLogOut} /> }/>
            <Route exact path="/main" render={(props) => <Main {...props} handleLogout={this.userLogOut} /> }/>
            <Route exact path="/add" render={() => <Add handleLogout={this.userLogOut} /> }/>
            <Route exact path="/resource" render={() => <Resource handleLogout={this.userLogOut} /> }/>
    
            <Route path="/user/:email" render={(props) => {
               return <Profile {...props} />
            }} />

            {/* 
            if you want to lock down user profile route to only show if they are logged in
            comment out the route above and uncomment the code below on lines 71
             */}
            {/* <Route path="/add" render={(props) => {
              console.log(this.state.user.LoggedIn, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Add {...props} handleAdd={this.userDidAdd} />
              ) : (
                  <Redirect to="/"/>
                )

            }} /> */}
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/login" render={() => (
              <Login handleLogin={this.userDidLogin} />
            )} />

            <Route exact path="/add" render={(props) => (
              <Add {...props} handleAdd={this.userDidAdd} />
            )} />
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/admin" render={(props) => {
              console.log(props, "this is match")
              console.log(this.state.user.isAdmin, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Admin {...props}/>
              ) : (
                  <Redirect to="/" />
                )
            }} />
          </Switch>
        </div>
       </Router>
    );
  }
}

export default App;

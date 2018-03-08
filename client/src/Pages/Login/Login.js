import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Input from '../../components/Input';
// import Nav from '../../components/Nav';

class Login extends Component {
  state = {
    password: '',
    email: ''
  }

  handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {

    return (
      <main>
        {/* Your content here */}
        {/* Animated Gif and Main Logo Card */}
        <div className="card z-depth-0">
          <div className="card-image waves-effect waves-block waves-light">
            <br />
            <img className src="../../../assets/images/logos/JICslow.gif" alt="" />
            <br />
          </div>
          <div className="card-content-landing" align="center">
            <span className="welcome"><h4 align="center">...<span id="typed" /></h4></span>
            <br />
            <div className="row">
              <div>
                <Input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <br />
                <Input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
                
                <Link to="/profile" onClick={() => this.props.handleLogin(this.state)} id="login" className="modal-action modal-close waves-effect red btn">Login</Link>

              </div>
            </div>
          </div>
        </div>
        
        </main>
    );
  };
};

export default Login;
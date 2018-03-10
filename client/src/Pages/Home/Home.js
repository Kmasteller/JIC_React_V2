import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    logemail: '',
    logpassword: '',
    password: '',
    first_name: '',
    last_name: '',
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
      {/* Our content here */}
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
          {/* Tour Button */}
            <div className="row">
              <div className="col s12"><Link className="waves-effect red btn" to="/tour" data-transition="slide" ><i className="material-icons left">play_arrow</i>Take Tour</Link></div>
              <br /><br /><br />
            </div>
          {/* end of tour button */}

          {/* Sign in Button and Bottom Modal Trigger for Sign In */}
            <div className="row">
              <div className="col s6"><a className="waves-effect black btn modal-trigger" href="#modal1"><i className="material-icons left">person</i>Sign In</a></div>
                {/* Modal Structure */}
                <div id="modal1" className="modal bottom-sheet">
                  <div className="modal-content">
                    <h5>Sign into your <b style={{ fontSize: 20 }}><strong>JUST<font color="red">IN</font>CASE</strong></b> account</h5>
                  </div>
                  <div className="container">
                      <form className="col s12">
                        <div className="row">
                          <div className="col s12"></div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input className="validate" type="email" name="logemail" id="logemail" value={this.state.logemail} onChange={this.handleChange} />
                              <label htmlFor="email">Enter your email</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input className="validate" type="password" name="logpassword" id="logpassword" value={this.state.logpassword} onChange={this.handleChange} />
                              <label htmlFor="password">Enter your password</label></div>
                              <label style={{ float: 'right' }}>
                            <a className="pink-text" href="#!"><b>Forgot Password?</b></a>
                          </label>
                        </div>
                      </form>
                  </div>
                  <div className="modal-footer">
                    <a href="main" className="modal-action modal-close waves-effect red btn">Go</a>
                  </div>
                </div>
                {/* End of Modal */}
            {/* end of sign in button */}

            {/* Sign up button and Modal Trigger */}
            <div className="col s6"><a className="waves-effect black btn modal-trigger" href="#modal2"><i className="material-icons left">person_add</i>Sign Up</a></div>
              {/* 1st Modal Structure */}
                <div id="modal2" className="modal modal-fixed-footer">
                  <div className="modal-content">
                    <h5>Sign up for your FREE <b style={{ fontSize: 20 }}><strong>JUST<font color="red">IN</font>CASE</strong></b> account</h5>
                    <hr align="center" width="50%" />
                    <p align="left">When you sign up for an account with Just in Case, we take your security seriously. After all, we are a web app meant to help YOU, Just in Case stuff happens, so you bet we are on top of it!</p>
                    <br />
                    <p align="left">After you sign up for your personal account, you will then be guided through the addition of your important personal details first. Afterwards, you'll have the option to add details for the important people in your life. Think, kids, significant other, extended family and even friends.</p>
                    <br />
                    <p align="left">No one knows when the unthinkable will happen. Hopefully it never will! No matter what, Just in Case eases the stress of "what if". It prepares you with access to the information you might someday need, but we hope you never will. This isn't an act of fear. It is an act of preparation!</p>
                  </div>
                  <div className="modal-footer">
                    <a href="#modal3" className="modal-action modal-close waves-effect red btn modal-trigger">Get Started!</a>
                  </div>
                </div>
            {/* End 1st Modal Structure */}
            {/* 2nd Modal Structure */}
              <div id="modal3" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Fill me out ... </h5>
                  <div id="register" className="col s12">
                    <form className="col s12" id="sign-up" name="sign-up">
                      <div className="form-container">
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                            <label htmlFor="first_name">First Name</label>
                          </div>
                          <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                            <label htmlFor="last_name">Last Name</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleChange}/>
                            <label htmlFor="email">Email</label>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="input-field col s12">
                            <input id="email-confirm" type="email" className="validate" name="email-confirm" value={this.state.email-confirm} onChange={this.handleChange} />
                            <label htmlFor="email-confirm">Email Confirmation</label>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="input-field col s12">
                            <input id="password-confirm" type="password" className="validate" name="password-confirm" value={this.state.password-confirm} onChange={this.handleChange} />
                            <label htmlFor="password-confirm">Password Confirmation</label>
                          </div>
                        </div> */}
                        {/* submit button */}
                        <div className="row">
                          <div className="col s12">
                            <Link to="add" onClick={() => this.props.handleSignup(this.state)} id="new-sign-up" className="modal-action modal-close waves-effect red btn">Sign me up!</Link>
                          </div>
                        </div>
                        {/* end submit button */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <img className="landing-logo" src width="80%" height="" alt="" />
            </div>
      </div>
      </div>
    </main>
);
};
};

export default Home;
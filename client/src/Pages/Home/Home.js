import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
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
            <div className="col s12"><Link className="waves-effect red btn" to="/tour" data-transition="slide" ><i className="material-icons left">play_arrow</i>Take Tour</Link></div>
            <br /><br /><br />
            {/* Bottom Modal Trigger for Sign In */}
            <div className="col s6"><a className="waves-effect black btn modal-trigger" href="#modal1"><i className="material-icons left">person</i>Sign In</a></div>
            {/* Modal Structure */}
            <div id="modal1" className="modal bottom-sheet">
              <div className="modal-content">
                <h5>Sign into your <b style={{ fontSize: 20 }}><strong>JUST<font color="red">IN</font>CASE</strong></b> account</h5>
              </div>
              <div className="container">
                <form className="col s12">
                  <div className="row">
                    <div className="col s12">
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input className="validate" type="email" name="email" id="email" />
                      <label htmlFor="email">Enter your email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input className="validate" type="password" name="password" id="password" />
                      <label htmlFor="password">Enter your password</label>
                    </div>
                    <label style={{ float: 'right' }}>
                      <a className="pink-text" href="#!"><b>Forgot Password?</b></a>
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <a href="main.html" className="modal-action modal-close waves-effect red btn">Go</a>
              </div>
            </div>
            {/* End of Modal */}
            {/* Modal Trigger */}
            <div className="col s6"><a className="waves-effect black btn modal-trigger" href="#modal2"><i className="material-icons left">person_add</i>Sign Up</a></div>
            {/* Modal Structure */}
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
                        {/* end submit button */}
                      </div>
                    </div></form>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
            <br />
            <img className="landing-logo" src width="80%" height="" alt="" />
            </div>
        </div>
        {/* End of hidden card content */}
        {/* <div class="fixed-action-btn toolbar ">
            <a class="btn-floating pulse btn-large red disabled">
            <i class="large material-icons">menu</i>
            </a>
            <ul>
            <li class="waves-effect waves-light"><a href="main"><i class="material-icons">home</i></a></li>
            <li class="waves-effect waves-light"><a href="add.html"><i class="material-icons">add</i></a></li>
            <li class="waves-effect waves-light"><a href="resources.html"><i class="material-icons">format_list_bulleted</i></a></li>
            <li class="waves-effect waves-light"><a href="tour"><i class="material-icons">play_arrow</i></a></li>
            </ul>
        </div> */}
      </div></main>
);
};
};

export default Home;
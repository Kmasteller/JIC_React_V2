import React, { Component } from 'react';

import Input from '../../components/Input';
import { Link } from "react-router-dom";
// import FooterMenu from '../../components/Footer-menu';
import Menu from '../../components/Menu';
import { Button, CardTitle, Card , Col } from 'react-materialize';
import axios from 'axios';

class Add extends Component {
  
  state = {
    tempUser: {},
    user: {
      loggedIn: false,
      isAdmin: false,
      currentUser: {
        photo: "",
        birthdate: "",
        address: "",
        phone: "",
        height: "",
        weight: "",
        hair: "",
        eyes: ""
      }

    }
  }

  // constructor(props){
  //   super(props)

  //     this.state = {
  //     photo: "",
  //     birthdate: "",
  //     address: "",
  //     phone: "",
  //     height: "",
  //     weight: "",
  //     hair: "",
  //     eyes: ""
  //   }
  // }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkloging state")
      console.log(res)
      this.setState({ user: res.data });
      console.log(this.state)
    })
  }

  componentWillMount() {
    console.log(this.props, "props from profile")
    console.log(this.state, "props from state")
    this.checkLogin()
    axios.get(`/api/profile/${this.props.match.params.email}`).then((response) => {
      console.log(response);
      this.setState({
        tempUser: response.data
      });
      console.log(this.props, "props from profile")
      console.log(this.state, "props from state")
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
//   userDidAdd = (userData) => {
//   console.log(userData)
//   // axios.post("/api/add", userData).then((res) => {
//   //   console.log(res)
//   // })
// }

  render() {
    return (
      <main>

      <form id="profile" name="profile" >
        {/* Your content here */}
        <div>
          {/* Informational Modal Structure - Opens on Page Load */}
            <div id="add-modal" className="modal">
              <div className="modal-content">
                <h4 align="center">Lets get started</h4>
                  <h6>First, we will walk you through adding the most basic bits of personal information.
                  <br />
                  <br />
                  Afterwards, you will have the ability to add additional information to your own profile, OR, begin adding info
                  for the important people in your life.
                  </h6>
              </div>
              <div className="modal-footer">
                <Link to="#!" className="modal-action modal-close waves-effect red btn">Lets do it!</Link>
              </div>
            </div>
          </div>
          {/* End of Informational Modal Structure - Opens on Page Load */}

          {/* 1st Card Area */}
            <Col m={7} s={12}>
              <Card className='card horizontal grey lighten-5'>
                <h5>Use a clear, well lit photo of your face</h5>
                <br />
                <Button waves='light' className='red btn left' icon='photo_camera'/>
                <Input s={6} name="photo" value={this.state.photo} onChange={this.handleChange} />
              </Card>
            </Col>

          {/* 2nd Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal birth-date grey lighten-4'>
                <h5>When were you born?</h5>
                <br />
                  <Input name='on' type='date' onChange={function(e, value) {}} />
              </Card>
            </Col>
          {/* End  */}

          {/* 3rd Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal address grey lighten-3'>
                <h5>What is your address?</h5>
                <br />
                  <Input label="Home Address" s={12} value={this.state.address} className="materialize-textarea" onChange={this.handleChange} />
                <br /><br />
              </Card>
            </Col>
          {/* End  */}

          {/* 4th Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal phone grey lighten-2'>
                <h5>What is your phone number?</h5>
                <br />
                  <Input s={6} label="Telephone" value={this.state.phone} name="phone" validate type='tel' className="materialize-textarea" onChange={this.handleChange} />
                  <br /><br />
              </Card>
            </Col>
          {/* End  */}

          {/* 5th Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal height grey lighten-1 white-text'>
                <h5>What is your height?</h5>
                <br />
                  <Input s={6} value={this.state.height} name="height" className="materialize-textarea" onChange={this.handleChange} />
                  <br /><br />
              </Card>
            </Col>
          {/* End  */}

          {/* 6th Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal weight grey darken-1 white-text'>
                <h5>What is your weight?</h5>
                <br />
                  <Input s={6} value={this.state.weight} name="weight" className="materialize-textarea" onChange={this.handleChange} />
                <br /><br />
              </Card>
            </Col>
          {/* End  */}

          {/* 7th Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal hair grey darken-2 white-text'>
                <h5>What is your hair color?</h5>
                <br />
                  <Input s={6} value={this.state.hair} name="hair" className="materialize-textarea" onChange={this.handleChange} />
                <br /><br />
              </Card>
            </Col>
          {/* End  */}

          {/* 8th Card */}
            <Col m={7} s={12}>
              <Card className='card horizontal eyes grey darken-3 white-text'>
                <h5>What is your eye color?</h5>
                <br />
                  <Input s={6} value={this.state.eyes} name="eyes" className="materialize-textarea" onChange={this.handleChange} />
                <br /><br />
              </Card>
            </Col>
          {/* End  */}

          {/* submit button */}
          <div className="row center">
            <div className="col s12">
              {/* <button onClick={() => this.props.handleAdd(this.state)}>Login</button> */}
              <Button className='red' waves='light' onClick={() => this.props.handleAdd(this.state)}>Save</Button>

              {/* <button className="waves-effect red btn" onClick={() => this.props.handleAdd(this.state)}><i className="material-icons left">save</i>Save</button> */}
              {/* <button className="waves-effect red btn" id="submit-profile" type="submit" name="action"><i className="material-icons left">save</i>Save</button> */}
            </div>

          </div>
            <div className="row center">
              <div className="col s12">
                <Menu />
                </div>
                </div>
          {/* end of submit button */}
      </form>
    </main>



    );
  }
}

export default Add;
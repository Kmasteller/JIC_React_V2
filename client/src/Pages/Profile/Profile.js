import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Update from '../../components/Update';
import axios from 'axios';
// import Nav from '../../components/Nav';
import { Card, CardTitle, Col, Row, Button } from 'react-materialize';
import Menu from '../../components/Menu';

class Profile extends Component {

    state = {
      tempUser: {},
      user: {
        loggedIn: false,
        isAdmin: false,
        currentUser: {
          id: null,
          first_name: '',
          last_name: '',
          email: '',
          profilePic: null,
        }
      }
    }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checklogging state")
      console.log(res)
      this.setState({user: res.data});
      console.log(this.state)
    })
  }

    // componentWillMount() {
    //   this.props.checkLogin()
    // }
    
    componentDidMount() {
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
    
  render() {

    const centerAlign = {
      textAlign: "center"
    }

    return (
      <main>
      <div>
        {/* Main Card */}
        <Row>
          <Col m={7} s={12}>
            <Card className="card medium grey lighten-4" style={centerAlign} header={<CardTitle image= '../../../assets/images/profile/sopuse.jpg' alt=''></CardTitle>} 
            actions={[<Button waves='light' className='red' node='a' href='profile'>Full Profile</Button>]}>
              <div>
                <div className="row">
                  <div className="col s12 h4 h6">
                    {/* Needs to render dynamically */}
                    <h4 class="h4"><strong>Sally Bananas</strong></h4>
                    <h6 class="h6">"You"</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    {/* Needs to render dynamically */}
                      <p>DOB: 12/7/80</p>
                      <p>Height: 5' 9"</p>
                      <p>Hair: Brown</p>
                  </div>
                  <div className="col s6">
                    {/* Needs to render dynamically */}
                      <p>AGE: 36</p>
                      <p>Weight: 150 lbs</p>
                      <p>Eye: Brown</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      <Menu handleLogout={this.props.handleLogout}/>
    </div>
  </main>
    );
  }
}

export default Profile;

// render() {
//   return (
//     <div>
//       <div className="card" style={this.cardStyle}>
//         <img className="card-img-top" src={this.state.tempUser.profilePic} alt="" />
//         <div className="card-body">
//           <h5 className="card-title">{this.state.tempUser.username}</h5>
//           <p className="card-text">Your Users Comments</p>
//           {this.state.user.currentUser.username === this.state.tempUser.username &&
//             <Link
//               to={`/user/${this.props.match.params.username}/update`}
//               className="btn btn-primary">Update</Link>}
//           <Route path="/user/:username/update" component={Update} />
//         </div>
//       </div>
//     </div>
//   );
// }
// }
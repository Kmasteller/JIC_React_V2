import React, { Component } from "react";
import { Card, CardTitle, Col, Row, Button } from 'react-materialize';
import axios from 'axios';

class UserCard extends Component {
    
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

    render() {

        const centerAlign = {
            textAlign: "center"
          }

        return (

            <div>
            <Row>
                <Col m={7} s={12}>
            {/* <Nav userInfo={this.state.user}/> */}
                <Card className="card medium grey lighten" style={centerAlign} header={<CardTitle src={this.state.tempUser.profilePic} alt=''></CardTitle>} 
                    actions={[<Button waves='light' className='red' node='a' href='profile'>Full Profile</Button>]}>
                    <div className='row'>
                        <div className="col s12">
                            <h5 className="card-content">{this.state.tempUser.first_name + " " +this.state.tempUser.last_name}</h5>
                            <p className="card-text">{this.state.tempUser.email}</p>
                        </div>
                    </div>
                        {this.state.user.currentUser.email === this.state.tempUser.email &&
                            <Link to={`/user/${this.props.match.params.email}/update`} 
                            className="btn btn-default">Update</Link>}
                            <Route path="/user/:email/update" component={Update} />
                        <br />
                </Card> 
                </Col> 
            </Row>       
            </div>
        );
    }
}
    
 export default UserCard;
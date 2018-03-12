import React, { Component } from "react";
import { Card, CardTitle, Col, Row, Button } from 'react-materialize';
import axios from 'axios';

class Profile extends Component {
  
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
                        <Card className="card medium grey lighten" style={centerAlign} header={<CardTitle src={this.state.tempUser.photo} alt=''></CardTitle>} 
                            actions={[<Button waves='light' className='red' node='a' href='profile'>Full Profile</Button>]}>
                        <div className='row'>
                            <div className="col s12">
                                <h5 className="card-content">{this.state.tempUser.first_name + " " +this.state.tempUser.last_name}</h5>
                                <p>{this.state.tempUser.email}</p>
                            </div>
                        </div>
                            {this.state.user.currentUser.email === this.state.tempUser.email &&
                                <Link to={`/user/${this.props.match.params.email}/update`} 
                                className="btn btn-default">Update</Link>}
                                <Route path="/user/:email/update" component={Update} />
                            <br />
                            <div className="row">
                            <div className="col s6">
                                {/* Needs to render dynamically */}
                                <p>{this.state.tempUser.birthdate}</p>
                                <p>{this.state.tempUser.Address}</p>
                                <p>{this.state.tempUser.phone}</p>
                            </div>
                            <div className="col s6">
                                {/* Needs to render dynamically */}
                                <p>{this.state.tempUser.height}</p>
                                <p>{this.state.tempUser.weight}</p>
                                <p>{this.state.tempUser.hair}</p>
                                <p>{this.state.tempUser.eyes}</p>
                            </div>
                            </div>
                        </Card> 
                    </Col> 
                </Row>       
            </div>
        );
    }
}
    
 export default UserCard;
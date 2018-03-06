import React from 'react';
import { CardTitle, Card, Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";

const Resource = (props) => {
    console.log(props)

    const centerAlign = {
        textAlign: "center"
        }

    const fitImage = {
        // maxWidth: "100%",
        // maxHeight: "90%",
        objectFit: "contain"
        }

    return (
        <main>
            {/* Your content here */}
        <div>
            {/* Main Card */}
            <Row>
            <Col m={7} s={12}>
            <Card className="card horizontal" style={centerAlign} header={<CardTitle style={fitImage} image= '../../../assets/images/resources/first-aid-kit.jpg' alt='First Aid Kit'></CardTitle>} 
            actions={[<Link to='https://www.google.com'>Learn More!</Link>]}>
            <div>
                <h5 className="resource-title">Click Below to learn more:</h5>
            </div>
              <br />
            </Card>
            </Col>
            </Row>
            {/* <div className="col s12 s7">
                <div className="card horizontal">
                <div className="card-image">
                    <img src="./assets/images/resources/first-aid-kit.jpg" alt="First Aid Kit" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <h5 className="resource-title">First Aid Guidelines</h5>
                    <div className="row">
                        <div className="col s12">
                        <img src="./assets/images/resources/ahaarc.png" className="responsive" alt="Second Aid Kit" />
                        </div>
                    </div>
                    </div>
                    <div className="card-action">
                    <p className="black-text text-darken-4">more<Link to="!#"><i className="material-icons right">more_horiz</i></Link></p>
                    </div>
                </div>
                </div>
            </div> */}

        {/* <div class="col s12 s7">
                <div class="card horizontal">
                  <div class="card-image">
                    <img src="./assets/images/resources/first-aid-kit.jpg">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                        <h5 class="resource-title">First Aid Guidelines</h5>
                        <br>
                        <div class="row">
                                <div class="col s12">
                                    <img src="./assets/images/resources/ahaarc.png" class="responsive-img">
                                </div>
                                <span><b style="font-size:20px"><strong>JUST<font color="red">IN</font>CASE</strong></b> explore first aid and emergency procedures.</span>
                        </div>
                    </div>
                    <div class="card-action">
                        <p class="black-text text-darken-4"><a href="firstaid.html"><i class="material-icons right">more_horiz</i></a></p>
                    </div>
                  </div>
                </div>
              </div>
        <!-- End  -->

        <!-- Second Card -->

        <div class="col s12 s7">
                <div class="card horizontal">
                  <div class="card-image">
                    <img src="./assets/images/resources/poisoncontrol.png">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                        <h5 class="resource-title">Utah Poison Control</h5>
                        <br>
                        <div class="row">
                                <div class="col s12">
                                    <img src="./assets/images/resources/uhealth-logo.svg" class="responsive-img">
                                </div>
                                <span><b style="font-size:20px"><strong>JUST<font color="red">IN</font>CASE</strong></b> explore first aid and emergency procedures.</span>
                        </div>
                    </div>
                    <div class="card-action">
                        <p class="black-text text-darken-4"><a href="poisoncontrol.html"><i class="material-icons right">more_horiz</i></a></p>
                    </div>
                  </div>
                </div>
              </div>
        <!-- End  -->

        <!-- Third Card -->

        <div class="col s12 s7">
                <div class="card horizontal">
                  <div class="card-image">
                    <img src="./assets/images/resources/fingerprint.gif">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                        <h5 class="resource-title">F.B.I. recommended<br>Child Safety Kit</h5>
                        <br>
                        <div class="row">
                                <div class="col s12">
                                    <img src="./assets/images/resources/ncip.png" class="responsive-img">
                                </div>
                                <span><b style="font-size:20px"><strong>JUST<font color="red">IN</font>CASE</strong></b> request the child safety kit recommended by the F.B.I. be mailed to you.</span>
                        </div>
                    </div>
                    <div class="card-action">
                        <p class="black-text text-darken-4"><a href="childsafekit.html"><i class="material-icons right">more_horiz</i></a></p>
                    </div>
                  </div>
                </div>
              </div>
        <!-- End  -->

        <!-- Fourth Card -->

        <div class="col s12 s7">
                <div class="card horizontal">
                  <div class="card-image">
                    <img src="./assets/images/resources/alert-icon-red.png">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                        <h5 class="resource-title">Sign Up to receive<br>Local Amber Alerts</h5>
                        <br>
                        <div class="row">
                                <div class="col s12">
                                    <img src="./assets/images/resources/amber.png" class="responsive-img">
                                </div>
                                <span><b style="font-size:20px"><strong>JUST<font color="red">IN</font>CASE</strong></b> you are the able to help a missing or exploited child return home safely.</span>
                        </div>
                    </div>
                    <div class="card-action">
                        <p class="black-text text-darken-4"><a href="amberalerts.html"><i class="material-icons right">more_horiz</i></a></p>
                    </div>
                  </div>
                </div>
              </div> */}

            {/* End  */}
            <div className="fixed-action-btn toolbar ">
                <Link className="btn-floating pulse btn-large red" to=""></Link>
                <i className="large material-icons">menu</i>
                <ul>
                <li className="waves-effect waves-light"><Link to="main.html"><i className="material-icons">home</i></Link></li>
                <li className="waves-effect waves-light"><Link to="addother.html"><i className="material-icons">add</i></Link></li>
                <li className="waves-effect waves-light"><Link to="resources.html"><i className="material-icons">format_list_bulleted</i></Link></li>
                <li className="waves-effect waves-light"><Link to="tour.html"><i className="material-icons">play_arrow</i></Link></li>
                </ul>
            </div>
        </div>
    </main>
    );
};

export default Resource;
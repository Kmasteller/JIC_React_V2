import React from 'react';
import { Button, CardTitle, Card, Row, Col } from 'react-materialize';
import Menu from '../../components/Menu';

const Resource = (props) => {
    console.log(props)

    const centerAlign = {
        textAlign: "center"
        }

    const buttonWidth = {
        width: "320px"
        }

    return (
        <main>
            {/* Your content here */}
        <div>
            {/* Main Card */}
            <Row>
                <Col m={7} s={12}>
                    <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/resources/firstAidKit.jpg' alt='First Aid Kit'></CardTitle>} 
                    actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps'>Red Cross First Aid</Button>]}>
                        <div>
                            <br /><br />
                            <h5 className="resource-title">Click Below to learn more:</h5>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col m={7} s={12}>
                    <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/resources/CPR.png' alt='CPR'></CardTitle>} 
                    actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='https://www.mayoclinic.org/first-aid/first-aid-cpr/basics/art-20056600'>Cardiac Pulmonary Resuscitation</Button>]}>
                        <div>
                            <br /><br />
                            <h5 className="resource-title">Click Below to learn more:</h5>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col m={7} s={12}>
                    <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/resources/heimlich.jpg' alt='First Aid Kit'></CardTitle>} 
                    actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='https://www.wikihow.com/Perform-the-Heimlich-Maneuver'>Heimlich Maneuver</Button>]}>
                        <div>
                            <br /><br />
                            <h5 className="resource-title">Click Below to learn more:</h5>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col m={7} s={12}>
                    <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/resources/poison.jpg' alt='First Aid Kit'></CardTitle>} 
                    actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='http://www.aapcc.org/'>Poison Control</Button>]}>
                        <div>
                            <br /><br />
                            <h5 className="resource-title">Click Below to learn more:</h5>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col m={7} s={12}>
                    <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/resources/amber.jpg' alt='First Aid Kit'></CardTitle>} 
                    actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='https://www.amberalert.gov/'>Amber Alert</Button>]}>
                        <div>
                            <br /><br />
                            <h5 className="resource-title">Click Below to learn more:</h5>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col m={7} s={12}>
                    <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/resources/safety.jpg' alt='First Aid Kit'></CardTitle>} 
                    actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='https://www.childsafekit.com/'>Child Safety Kits</Button>]}>
                        <div>
                            <br /><br />
                            <h5 className="resource-title">Click Below to learn more:</h5>
                        </div>
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
        </div>
        <Menu />
    </main>
    );
};

export default Resource;
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
  
                    <Menu />
        </div>

    </main>
    );
};

export default Resource;
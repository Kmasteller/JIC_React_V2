import React from 'react';
// import { Link } from "react-router-dom";
import { Button, CardTitle, Card, Row, Col } from 'react-materialize';
import Menu from '../../components/Menu';

const Main = (props) => {
  console.log(props)

  const centerAlign = {
    textAlign: "center"
    }

  const buttonWidth = {
    width: "320px"
    }

  return (
    <main>
      <div>
        {/* Main Card */}
        <Row>
          <Col m={7} s={12}>
            <Card className="card medium" style={centerAlign} header={<CardTitle image= '../../../assets/images/profile/sopuse.jpg' alt='First Aid Kit'></CardTitle>} 
            actions={[<Button style={buttonWidth} waves='light' className='red' node='a' href='profile'>Full Profile</Button>]}>
              <div>
                <br /><br />
                <div className="row">
                  <div className="col s12">
                    {/* Needs to render dynamically */}
                    <h6><strong>Sally Bananas</strong></h6>
                  </div>
                </div>
                <div className="row">
                {/* Needs to render dynamically */}
                  <div className="col s6">
                    <p>DOB: 12/7/80</p>
                    <p>Height: 5' 9"</p>
                    <p>Hair: Brown</p>
                  </div>
                  <div className="col s6">
                    <p>AGE: 36</p>
                    <p>Weight: 150 lbs</p>
                    <p>Eye: Brown</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        {/* <div className="col s12 s7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="./assets/images/profile/you.JPG" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 className="your-name">JoEllen D. Giani</h5>
                <div className="row">
                  <div className="col s6">
                    <p>DOB: 12/7/80</p>
                    <p>Height: 5' 9"</p>
                    <p>Hair: Brown</p>
                  </div>
                  <div className="col s6">
                    <p>AGE: 36</p>
                    <p>Weight: 150 lbs</p>
                    <p>Eye: Brown</p>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <Link className="black-text text-darken-4" to="profile">YOU</Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Menu />
    </main>
  );
};

export default Main;
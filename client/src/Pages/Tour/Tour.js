import React from 'react';
import { Link } from "react-router-dom";
import {Carousel} from "react-materialize";
// import {Dropdown, Button} from 'react-materialize';

const Tour = (props) => {
  console.log(props)

  const centerAlign = {
    textAlign: "center"
  }

  return (
    <main>
    <Carousel options={{ fullWidth: true}}>
      <div className="red" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="pink" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="purple" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="indigo" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="blue" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="light-blue" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="cyan" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="teal" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>
      <div className="green" style={centerAlign}>
            <img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
      </div>

    </Carousel>

      {/* Carousel Option 2 */}
      {/* <Carousel images={[

      '../../../assets/images/tour/ob1.png',

      '../../../assets/images/tour/ob2.png',

      '../../../assets/images/tour/ob3.png',

      '../../../assets/images/tour/ob4.png',

      '../../../assets/images/tour/ob5.png',

      '../../../assets/images/tour/ob6.png',

      '../../../assets/images/tour/ob7.png',

      '../../../assets/images/tour/ob8.png',

      '../../../assets/images/tour/ob9.png'

      ]} /> */}

    
      
      <div className="fixed-action-btn toolbar">
        <Link className="btn-floating pulse btn-large red" to="/" />
          <i className="large material-icons">menu</i>
        
        <ul>
          <li className="waves-effect waves-light"><Link to="/main" /><i className="material-icons">home</i></li>
          <li className="waves-effect waves-light"><Link to="/addother" /><i className="material-icons">add</i></li>
          <li className="waves-effect waves-light"><Link to="/resources" /><i className="material-icons">format_list_bulleted</i></li>
          <li className="waves-effect waves-light"><Link to="/tour" /><i className="material-icons">play_arrow</i></li>
        </ul>
      </div>
      </main>
  );
};

export default Tour;
import React from 'react';
import { Link } from "react-router-dom";

const Tour = (props) => {
  console.log(props)
  return (
    <main>
      {/* <div>Tour</div> */}
      {/* Your content here */}
      <div className="carousel carousel-slider" data-indicators="true">
        <div className="valign-wrapper center-align">
          <Link className="carousel-item red" to=" " /><img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item pink" to=" " /><img src="../../../assets/images/tour/ob2.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item purple" to=" " /><img src="../../../assets/images/tour/ob3.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item indigo" to=" " /><img src="../../../assets/images/tour/ob4.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item blue" to=" " /><img src="../../../assets/images/tour/ob5.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item light-blue" to=" " /><img src="../../../assets/images/tour/ob6.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item cyan" to=" " /><img src="../../../assets/images/tour/ob7.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item teal" to=" " /><img src="../../../assets/images/tour/ob8.png" alt="" />
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <Link className="carousel-item green" to=" " /><img src="../../../assets/images/tour/ob9.png" alt="" />
        </div>
        {/*  */}
      </div>
      <div className="fixed-action-btn toolbar">
        <Link className="btn-floating pulse btn-large red" to=" " />
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
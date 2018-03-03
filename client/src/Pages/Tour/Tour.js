import React from 'react';


const Tour = (props) => {
  console.log(props)
  return (
    <main>
      <div>Tour</div>
      {/* Your content here */}
      <div className="carousel carousel-slider" data-indicators="true">
        <div className="valign-wrapper center-align">
          <a className="carousel-item red" href="#one!"><img src="../../../assets/images/tour/ob1.png" alt="" max-width="375px" max-height="432px" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item pink" href="#two!"><img src="../../../assets/images/tour/ob2.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item purple" href="#three!"><img src="../../../assets/images/tour/ob3.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item indigo" href="#four!"><img src="../../../assets/images/tour/ob4.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item blue" href="#five!"><img src="../../../assets/images/tour/ob5.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item light-blue" href="#six!"><img src="../../../assets/images/tour/ob6.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item cyan" href="#seven!"><img src="../../../assets/images/tour/ob7.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item teal" href="#eight!"><img src="../../../assets/images/tour/ob8.png" alt="" /></a>
        </div>
        {/*  */}
        <div className="valign-wrapper center-align">
          <a className="carousel-item green" href="#nine!"><img src="../../../assets/images/tour/ob9.png" alt="" /></a>
        </div>
        {/*  */}
      </div>
      <div className="fixed-action-btn toolbar">
        <a className="btn-floating pulse btn-large red">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li className="waves-effect waves-light"><a href="main"><i className="material-icons">home</i></a></li>
          <li className="waves-effect waves-light"><a href="addother.html"><i className="material-icons">add</i></a></li>
          <li className="waves-effect waves-light"><a href="resources.html"><i className="material-icons">format_list_bulleted</i></a></li>
          <li className="waves-effect waves-light"><a href="tour"><i className="material-icons">play_arrow</i></a></li>
        </ul>
      </div>
    </main>
  );
};

export default Tour;
import React from 'react';

const Main = (props) => {
  console.log(props)
  return (
    <main>
      <div>
        {/* Main Card */}
        <div className="col s12 s7">
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
                <p className="black-text text-darken-4">YOU<a href="profile.html"><i className="material-icons right">more_horiz</i></a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed-action-btn toolbar ">
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
      </div>
    </main>
  );
};

export default Main;
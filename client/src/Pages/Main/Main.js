import React from 'react';

const Main = (props) => {
  console.log(props)
  return (
    <main>
      {/* Your content here */}
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
        {/* End  */}
        {/* Main Card */}
        {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/sopuse.JPG" alt="">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-spouse">Salvatore J. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 6/21/79</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 38</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR HUSBAND</p>                </div>
              </div>
            </div>
          </div> */}
        {/* End  */}
        {/* Main Card */}
        {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid1son1.JPG" alt="">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-sons-name">Salvatore R. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 8/21/06</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 11</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR SON</p>
                </div>
              </div>
            </div>
          </div> */}
        {/* End  */}
        {/* Main Card */}
        {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid2son2.JPG" alt="">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-sons-name">Nicholas A.M. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 5/15/09</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 8</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR SON</p>                </div>
              </div>
            </div>
          </div> */}
        {/* End  */}
        {/* Main Card */}
        {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid3daughter1.JPG" alt="">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-daughters-name">Brooklyn S. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 11/12/12</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 5</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR DAUGHTER</p>                </div>
              </div>
            </div>
          </div> */}
        {/* End  */}
        {/* Main Card */}
        {/* <div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                <img src="./assets/images/profile/kid4daughter2.JPG" alt="">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                    <h5 class="your-daughters-name">Angelina B. Giani</h5>
                    <div class="row">
                            <div class="col s6">
                                <p>DOB: 4/11/16</p>
                            </div>
                            <div class="col s6">
                                <p>AGE: 1</p>
                            </div>
                        </div>
                    </div>
                <div class="card-action">
                        <span><i class="material-icons right">more_horiz</i></span>
                        <p class="black-text text-darken-4">YOUR DAUGHTER</p>
                </div>
              </div>
            </div>
          </div> */}
        {/* End  */}
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
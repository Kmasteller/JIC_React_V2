import React from 'react';
import { Link } from "react-router-dom";


const Resource = (props) => {
    console.log(props)
    return (
        <main>
            {/* Your content here */}
        <div>
            {/* Main Card */}
            <div className="col s12 s7">
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
            </div>
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
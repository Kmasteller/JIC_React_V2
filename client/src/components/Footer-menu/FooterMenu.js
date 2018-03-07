import React, { Component } from "react";
import { Icon, Navbar, NavItem } from 'react-materialize';


class FooterMenu extends Component {

  state = {
    display: false
  };
  render() {
    return (

  <Navbar className="red" right>
    
    <NavItem href='main'><Icon>home</Icon></NavItem>
    <NavItem href='addother.html'><Icon>add</Icon></NavItem>
    <NavItem href='resources.html'><Icon>format_list_bulleted</Icon></NavItem>
    <NavItem href='tour'><Icon>play_arrow</Icon></NavItem>
  </Navbar>

// {/* <div className="fixed-action-btn toolbar ">
//             {/* <Link className="btn-floating pulse btn-large red">
//             <i className="large material-icons">menu</i>
//             </Link> */}

    // <Button waves-effect className='btn-floating pulse btn-large red' waves='light' onClick={() => this.props.handleAdd(this.state)}><Icon right>menu</Icon></Button>
    //         <ul>
    //         <li className="waves-effect waves-light"><Link to="main"><i class="material-icons">home</i></Link></li>
    //         <li className="waves-effect waves-light"><Link to="addother.html"><i class="material-icons">add</i></Link></li>
    //         <li className="waves-effect waves-light"><Link to="resources.html"><i class="material-icons">format_list_bulleted</i></Link></li>
    //         <li className="waves-effect waves-light"><Link to="tour"><i class="material-icons">play_arrow</i></Link></li>
    //         </ul>
    //     </div> */}
    );
  }
}
export default FooterMenu;


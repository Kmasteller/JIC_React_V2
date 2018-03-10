import React, { Component } from "react";

import { Button, Icon, SideNav, SideNavItem } from 'react-materialize';
import axios from 'axios';


class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
    display: true
  };
  this.toggleHamburger = this.toggleHamburger.bind(this);
}

  toggleHamburger = (e) => {
    console.log("e: ", e);
    e.preventDefault();
    let setDisplay = !this.state.display;
    this.setState({
      display: setDisplay
    })
  }

  userLogOut = () => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
    })
  }

  render() {

    return (

      <main>
        <SideNav
            trigger={<Button className='btn-floating pulse btn-large red' 
            style={bottomFix} 
            waves='light' 
            onClick={this.toggleHamburger}>
            <Icon>menu</Icon>
            </Button>}         
            >
              <SideNavItem href='main' icon='home'>Home Page</SideNavItem>
              <SideNavItem href='addother' icon='add'>Add a Card</SideNavItem>
              <SideNavItem href='resources' icon='format_list_bulleted'>Resources</SideNavItem>
              <SideNavItem href='tour' icon='play_arrow'>Take a Tour</SideNavItem>
              <SideNavItem onClick={this.userLogOut} href='/' icon='remove_circle_outline'>Logout</SideNavItem>
              {/* <SideNavItem onClick={this.toggleHamburger} icon='arrow_drop_down'>Close Menu</SideNavItem> */}
        </SideNav>
      </main>

    );
  }
}

export default Menu;

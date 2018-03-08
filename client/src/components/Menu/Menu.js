import React, { Component } from "react";
import { Button, Icon, Navbar, NavItem } from 'react-materialize';

class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
    display: true
  };
  this.toggleHamburger = this.toggleHamburger.bind(this);
}

  toggleHamburger = (e) => {
    console.log("e: " + e);
    e.preventDefault();
    let setDisplay = !this.state.display;
    this.setState({
      display: setDisplay
    })
  }

  render() {

    const bottomFix = {
      position: "fixed",
      bottom: "0",
      right: "0"
      }

    return (
      
<div className="toolbar">
      
        {this.state.display ? <Button className='btn-floating pulse btn-large red' style={bottomFix} waves='light' onClick={this.toggleHamburger}>

        <div className="row center">
          <Icon right>menu</Icon> </Button> : 
        

          <Navbar className="red btn-large">
          <NavItem href='main'><Icon>home</Icon></NavItem>
          <NavItem href='addother.html'><Icon>add</Icon></NavItem>
          <NavItem href='resources.html'><Icon>format_list_bulleted</Icon></NavItem>
          <NavItem href='tour'><Icon>play_arrow</Icon></NavItem>
          <NavItem onClick={this.toggleHamburger}><Icon>arrow_drop_down</Icon></NavItem>
        </Navbar>
        }

        </div>
  </div>

    );
  }
}

export default Menu;


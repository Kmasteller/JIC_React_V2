import React, { Component } from "react";
import { Button } from 'react-materialize';
import { Link } from "react-router-dom";

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

  render() {

    return (

        <Button floating fab='vertical' icon='menu' className='red' large style={{bottom: "45bs", right: "24px"}}>
                    
              <Link to='/'><Button floating icon='home' className='red' /></Link>
              <Link to='add'><Button floating icon='add' className='red' /></Link>
              <Link to='resource'><Button floating icon='format_list_bulleted' className='red' /></Link>
              <Link to='tour'><Button floating icon='play_arrow' className='red' /></Link>
              <Link to='/'><Button floating onClick={this.userLogOut} icon='remove_circle_outline' className='red' /></Link>
              {/* <SideNavItem onClick={this.toggleHamburger} icon='arrow_drop_down'>Close Menu</SideNavItem> */}
         </Button> 
    );
  }
}

export default Menu;

import React, { Component } from "react";
import { Button } from 'react-materialize';
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

        <Button floating fab='vertical' icon='menu' className='red' large style={{bottom: "45bs", right: "24px"}}>
                    
              <Button floating href='main' icon='home' className='red' />
              <Button floating href='addother' icon='add' className='red' />
              <Button floating href='resources' icon='format_list_bulleted' className='red' />
              <Button floating href='tour' icon='play_arrow' className='red' />
              <Button floating onClick={this.userLogOut} href='/' icon='remove_circle_outline' className='red' />
              {/* <SideNavItem onClick={this.toggleHamburger} icon='arrow_drop_down'>Close Menu</SideNavItem> */}
         </Button> 
    );
  }
}

export default Menu;

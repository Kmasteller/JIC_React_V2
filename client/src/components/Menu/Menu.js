import React, { Component } from "react";
import { Button} from 'react-materialize';

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


        <Button floating fab='vertical' icon='menu' className='red' large style={{bottom: '45px', right: '24px'}}>
          <Button floating icon='home' href='/main' className='red'/>
          <Button floating icon='add' href='/addother' className='red'/>
          <Button floating icon='format_list_bulleted' href='/resources' className='red'/>
          <Button floating icon='play_arrow' href='/tour' className='red'/>
        </Button>

    );
  }
}

export default Menu;

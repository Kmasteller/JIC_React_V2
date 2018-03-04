import React, { Component } from "react";
import { Button, Icon } from 'react-materialize';

class Menu extends Component {

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
}
  render() {
    return (
<div className="fixed-action-btn toolbar">
    <Button waves-effect className='btn-floating pulse btn-large red' waves='light' onClick={() => this.handleChange(this.state)}><Icon right>menu</Icon></Button>

  </div>
    );
  }
}

export default Menu;


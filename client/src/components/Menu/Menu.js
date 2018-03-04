import React, { Component } from "react";
import { Button, Icon } from 'react-materialize';

class Menu extends Component {

  state = {
    display: true
  };
  render() {
    return (
<div className="fixed-action-btn toolbar">
        <Button waves-effect className='btn-floating pulse btn-large red' waves='light' onClick={() => this.setState({ display: false })}><Icon right>menu</Icon></Button>

  </div>
    );
  }
}

export default Menu;


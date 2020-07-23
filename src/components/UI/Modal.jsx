import React, { Component } from 'react';
import Backdrop from './Backdrop';

export default class extends Component {
  shouldComponentUpdate(nextP, nextS) {
    return nextP.show !== this.props.show || nextP.children !== this.props.children;
  }

  render() {
    return (
      <div>
        <Backdrop show={this.props.show} remove={this.props.removeModal} />
        <div
          id='Modal'
          style={{
            transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity   : this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

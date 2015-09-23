import React, { Component, PropTypes } from 'react';

export default class ContainerB extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <h2>Container B</h2>
      </div>
    );
  }
}

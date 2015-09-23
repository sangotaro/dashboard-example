import React, { Component, PropTypes } from 'react';

export default class ContainerC extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <h2>Container C</h2>
      </div>
    );
  }
}

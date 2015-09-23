import React, { Component, PropTypes } from 'react';

export default class Hoge extends Component {

  handleClick(e) {
    this.props.onClickHoge('hoge');
  }

  render() {
    return (
      <div>
        <span onClick={(e) => this.handleClick(e)}>Hoge</span>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Hoge from '../components/hoge';
import { testAction } from '../actions/test';

@connect()
export default class ContainerA extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h2>Container A</h2>
        <Hoge onClickHoge={ text => dispatch(testAction(text))} />
      </div>
    );
  }
}

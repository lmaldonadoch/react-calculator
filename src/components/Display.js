import React from 'react';
import '../index.css';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }
  render() {
    return <div>{this.state.result}</div>;
  }
}

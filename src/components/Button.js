import React from 'react';
import '../index.css';

export default class Button extends React.Component {
  render() {
    return <button>{this.props.name}</button>;
  }
}

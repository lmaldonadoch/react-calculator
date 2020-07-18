/* eslint-disable class-methods-use-this */
import React from 'react';
import '../index.scss';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  renderButton(name) {
    const wide = name === '0' ? true : false;
    const color = !['÷', 'X', '-', '+', '='].includes(name)
      ? 'light-grey'
      : 'orange';
    return <Button name={name} wide={wide} color={color} />;
  }

  render() {
    return (
      <div className="button-panel">
        <div className="row">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div className="row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('X')}
        </div>
        <div className="row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div className="row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div className="row">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

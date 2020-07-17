import React from 'react';
import '../index.scss';
import Button from './Button';

function ButtonPanel(clickHandler) {
  const renderButton = (name) => {
    const wide = name === '0' ? '50%' : '25%';
    const color = !['÷', 'X', '-', '+', '='].includes(name)
      ? 'light-grey'
      : 'orange';
    return (
      <Button name={name} wide={wide} color={color} onClick={clickHandler} />
    );
  };

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

export default ButtonPanel;

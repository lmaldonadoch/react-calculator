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
      <Button
        name={name}
        wide={wide}
        color={color}
        onClick={() => clickHandler.onClick(name)}
      />
    );
  };

  return (
    <div className="button-panel">
      <div className="row">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
      </div>
      <div className="row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('X')}
      </div>
      <div className="row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="row">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
}

export default ButtonPanel;

import React from 'react';
import '../index.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App(props) {
  return (
    <div className="calculator-body">
      <Display />
      <ButtonPanel />
    </div>
  );
}

import React from 'react';
import '../index.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const state = { ...this.state };
    this.setState(Calculate(state, buttonName));
  }

  render() {
    const result = this.state.next ? this.state.next : this.state.total;
    return (
      <div className="calculator-body">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

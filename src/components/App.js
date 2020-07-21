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
    const result = Calculate(this.state, buttonName);
    const { total } = this.state;
    if (total === 'No division by 0') {
      let { newTotal } = this.state;
      newTotal = null;
      this.setState({ total: newTotal });
    } else {
      this.setState(result);
    }
  }

  render() {
    const { total, next } = this.state;
    const result = next || total;
    return (
      <div className="calculator-body">
        <Display result={result} />
        <ButtonPanel onClick={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

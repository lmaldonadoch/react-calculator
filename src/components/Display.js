/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  render() {
    let { result } = this.props;
    if (!result) {
      result = 0;
    }
    return <div className="display">{result}</div>;
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

import React from 'react';
import '../index.scss';
import PropTypes from 'prop-types';

function Display({ result }) {
  const resultToDisplay = result || '0';
  return <div className="display">{resultToDisplay}</div>;
}

Display.propTypes = {
};

Display.defaultProps = {
  result: '0',
};

export default Display;

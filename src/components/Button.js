/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../index.scss';
import PropTypes from 'prop-types';

function Button({ name, wide, color, onClick }) {
  const style = {
    width: wide,
    background: color,
  };

  return (
    <button type="submit" style={style} onClick={onClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;

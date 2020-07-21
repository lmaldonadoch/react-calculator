import React from 'react';
import '../index.scss';
import PropTypes from 'prop-types';

function Button({
  name, wide, color, onClick,
}) {
  const style = {
    width: wide ? '50%' : '25%',
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
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;

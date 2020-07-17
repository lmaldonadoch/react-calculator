/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../index.scss';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { name, wide, color } = this.props;
    const style = {
      width: wide,
      background: color,
    };
    return (
      <button type="submit" style={style}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

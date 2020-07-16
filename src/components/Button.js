/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { name } = this.props;
    return <button type="submit">{name}</button>;
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

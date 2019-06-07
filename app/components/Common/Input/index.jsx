import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type = 'text' }) {
  return <input type={type} />;
}

Input.propTypes = {
  type: PropTypes.string,
};

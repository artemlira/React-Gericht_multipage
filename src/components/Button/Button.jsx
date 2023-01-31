import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default function Button ({ text, className = false }) {
  return (
    <button className={className ? `${styles.button} ${className}` : `${styles.button}`}>
      {text}
    </button>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

Button.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.node
};

export default function Button ({ text, className }) {
  return (
    <button className={className ? `${styles.button} ${className}` : `${styles.button}`}>
      {text}
    </button>
  );
}

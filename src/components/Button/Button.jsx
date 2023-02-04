import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string
};
export default function Button ({ text, className = false, link = false }) {
  return (
    <button className={className ? `${styles.button} ${className}` : `${styles.button}`}>
      {link.valueOf('#')
        ? <a href={link}>{text}</a>
        : <Link to={link ? `${link}` : '/'}>{text}</Link>
      }
    </button>
  );
}

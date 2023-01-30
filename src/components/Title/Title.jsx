import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';
import logo from '../../images/Hero/iconLogo.svg';

export default function Title ({ text, className, title }) {
  return (
    <div className={className ? `${className} ${styles.title}` : `${styles.title}`}>
      <p>{text}</p>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

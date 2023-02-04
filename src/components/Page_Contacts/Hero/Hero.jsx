import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon1 } from '../../../images/Page-contacts/Hero/icon.svg';
import styles from './Hero.module.scss';

export default function Hero ({ title, page }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{ title}</h1>
        <div className={styles.wrapperText}>
          <Link to="/" className={styles.text}>Home</Link>
          <Icon1 className={styles.icon} />
          <p className={styles.text}>{ page}</p>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
};

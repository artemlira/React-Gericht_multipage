import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon1 } from '../../../images/Page-contacts/Hero/icon.svg';
import styles from './Hero.module.scss';

export default function Hero () {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>contact Us</h1>
        <div className={styles.wrapperText}>
          <Link to="/" className={styles.text}>Home</Link>
          <Icon1 className={styles.icon} />
          <p className={styles.text}>contact Us</p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './Title.module.scss';
import logo from '../../images/Hero/iconLogo.svg';


export default function Title({ text, className, title }) {
  console.log(className);
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




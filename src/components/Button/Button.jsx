import React from 'react';
import styles from './Button.module.scss';


export default function Button({ text, className }) {
  return (
    <button className={className ? `${styles.button} ${className}` : `${styles.button}`}>
      {text}
    </button>
  );
}




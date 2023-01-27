import React from 'react';
import styles from './Video.module.scss';
import { ReactComponent as Play } from '../../../images/video/Play.svg';


export default function Video() {
  return (
    <section className={styles.video}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.play}>
            <Play />
          </div>
        </div>
      </div>
    </section>
  );
}




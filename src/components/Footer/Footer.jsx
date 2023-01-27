import React from 'react';
import styles from './Footer.module.scss';
import Title from '../Title/Title';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className="newsletter">
            <Title className={styles.footerTitle} text="Newsletter" title="Subscribe to Our Newsletter" />
          </div>
          <div className="content">
            <div className="contacts"></div>
            <div className="contentLogo"></div>
            <div className="schedule"></div>
          </div>
          <div className="footerText">
            <p>2021 Gerícht. All Rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}




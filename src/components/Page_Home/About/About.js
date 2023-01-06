import React from 'react';
import styles from './About.module.scss';
import Button from './../../Button/Button';
import logo from '../../../images/Hero/iconLogo.svg';


export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.aboutUs}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.text}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            </div>
            <Button text='Know More' />
          </div>
          <div className={styles.history}>
            <h2 className={styles.title}>Our History</h2>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.text}>
              <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            </div>
            <Button text='Know More' />
          </div>
        </div>
      </div>
    </section>
  );
}




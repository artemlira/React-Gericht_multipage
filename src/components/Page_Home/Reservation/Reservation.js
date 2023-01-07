import React from 'react';
import styles from './Reservation.module.scss';
import Button from './../../Button/Button';
import logo from '../../../images/Hero/iconLogo.svg';


export default function Reservation() {
  return (
    <section className={styles.reservation}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <p className={styles.logoText}>Reservations</p>
            <div className={styles.logoImg}><img src={logo} alt="logo" /></div>
            <h2>Book A Table</h2>
          </div>
          <div className={styles.dialogBox}>
            <form className={styles.dialogForm} action="/">
              <input className={styles.text} type="text" placeholder='1 person' />
              <input className={styles.date} type="date" min='2021-01-01' max='2030-12-31' />
              <input className={styles.time} type="time" />
            </form>
          </div>
          <Button text='Book Now' />
        </div>
      </div>
    </section>
  );
}




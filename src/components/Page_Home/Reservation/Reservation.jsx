import React from 'react';
import styles from './Reservation.module.scss';
import Button from '../../Button/Button';
import Title from '../../Title/Title';


export default function Reservation() {
  return (
    <section id="reservation" className={styles.reservation}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <Title text="Reservations" title="Book A Table" />
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




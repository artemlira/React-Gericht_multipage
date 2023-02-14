import React, { useContext, useRef } from 'react';
import Button from '../../Button/Button';
import Title from '../../Title/Title';
import styles from './Reservation.module.scss';
import { GerichtContext } from './../../Context';

export default function Reservation () {
  const { reservationRef } = useContext(GerichtContext);
  const dateRef = useRef();
  const timeRef = useRef();
  const changeType = (ref, type) => {
    ref.current.type = type;
  };
  return (
    <section ref={reservationRef} className={styles.reservation}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <Title text="Reservations" title="Book A Table" />
          <div className={styles.dialogBox}>
            <form className={styles.dialogForm} action="/">
              <input
                className={styles.text}
                type="text"
                placeholder="1 person" />
              <input
                ref={dateRef}
                className={styles.date}
                type="text"
                onFocus={() => changeType(dateRef, 'date')}
                placeholder="12/05/2021"
                min="2021-01-01"
                max="2030-12-31" />
              <input
                ref={timeRef}
                className={styles.time}
                type="text"
                onFocus={() => changeType(timeRef, 'time')}
                placeholder="11:00 AM" />
            </form>
          </div>
          <Button text="Book Now" />
        </div>
      </div>
    </section>
  );
}

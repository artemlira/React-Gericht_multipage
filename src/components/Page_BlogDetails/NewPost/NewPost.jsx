import React from 'react';
import styles from './NewPost.module.scss';

export default function NewPost () {
  return (
    <section className={styles.newPost}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.title}>
            <h4>Post a Comment</h4>
          </div>
          <form action="/" className={styles.form} name="new Post">
            <div className={styles.message}>
              <textarea name="message" id="" rows="6" placeholder="Hello There, My message..."></textarea>
            </div>
            <div className={styles.name}>
              <input className={styles.firstName} name="firstName" type="text" placeholder="First Name" />
              <input className={styles.lastName} name="lastName" type="text" placeholder="Last Name" />
            </div>
            <div className={styles.agreement}>
              <label htmlFor="">
                <input type="checkbox" name="agreement" />
                <p>Save my name and email in this browser for the next time I comment.</p>
              </label>
            </div>
            <div className={styles.button}>
              <button className="btn__submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

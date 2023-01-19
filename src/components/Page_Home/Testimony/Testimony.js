import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Testimony.module.scss';
import logo from '../../../images/Hero/iconLogo.svg';


const animation = {
  hidden: {
    x: "100%",
    scale: 0.3,
  },
  visible: {
    x: 0,
    scale: 1,
    transition: { duration: 1 }
  },
  exit: {
    x: "100%",
  }
}

const testimonyBD = [
  {
    photo: '',
    photoWebp: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Wade Warren',
    position: 'Sommelier',
  },
  {
    photo: '',
    photoWebp: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Jane Cooper',
    position: 'Chef',
  },
  {
    photo: '',
    photoWebp: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Robert Fox',
    position: 'Chef',
  },
  {
    photo: '',
    photoWebp: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Brooklyn Simmons',
    position: 'Caterer',
  },
]

export default function Testimony() {
  return (
    <section className={styles.testimony}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <p className={styles.logoText}>Testimony</p>
            <div className={styles.logoImg}><img src={logo} alt="logo" /></div>
            <h2>Happy customers</h2>
          </div>
          <div className={styles.contant}>
            <motion.ul
              initial='hidden'
              animate="visible"
              className={styles.contantList}>
              {testimonyBD.map(el =>
                <MTestimonyItem
                  key={Math.random() * 10}
                  photo={el.photo}
                  text={el.text}
                  author={el.author}
                  position={el.position}
                />)}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonyItem = forwardRef(({ photo, photoWebp, text, author, position }, ref) => (
  <li className={styles.contantItem} ref={ref}>
    <div className={styles.itemPhoto}>

    </div>
    <div className={styles.itemContant}>
      <p className={styles.itemText}>{text}</p>
      <h4 className={styles.itemAuthor}>{author}</h4>
      <p className={styles.itemPosition}>{position}</p>
    </div>
  </li>
));

const MTestimonyItem = motion(TestimonyItem);




import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Testimony.module.scss';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import Title from './../../Title/Title';

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 }
  })
}

const testimonyBD = [
  {
    photo: '../../../images/Testimony/01.jpg',
    photoWebp: '../../../images/Testimony/01.webp',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Wade Warren',
    position: 'Sommelier',
  },
  {
    photo: '../../../images/Testimony/02.jpg',
    photoWebp: '../../../images/Testimony/02.webp',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Jane Cooper',
    position: 'Chef',
  },
  {
    photo: '../../../images/Testimony/03.jpg',
    photoWebp: '../../../images/Testimony/03.webp',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    author: 'Robert Fox',
    position: 'Chef',
  },
  {
    photo: '../../../images/Testimony/04.jpg',
    photoWebp: '../../../images/Testimony/04.webp',
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
          <Title text="Testimony" title="Happy customers" />
          <div className={styles.contant}>
            <motion.ul
              initial='hidden'
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={styles.contantList}>
              {testimonyBD.map((el, i) =>
                <MTestimonyItem
                  custom={i + 1}
                  variants={animation}
                  key={Math.random() * 10}
                  photo={el.photo}
                  photoWebp={el.photoWebp}
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
      {isWebpSupported()
        ? <img src={photoWebp} alt='author' />
        : <img src={photo} alt='author' />}
    </div>
    <div className={styles.itemContant}>
      <p className={styles.itemText}>{text}</p>
      <h4 className={styles.itemAuthor}>{author}</h4>
      <p className={styles.itemPosition}>{position}</p>
    </div>
  </li>
));

const MTestimonyItem = motion(TestimonyItem);




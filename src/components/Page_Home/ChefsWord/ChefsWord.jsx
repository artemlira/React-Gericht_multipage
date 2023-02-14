import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Title from '../../Title/Title';
import ChefsWordSlider from './ChefsWordSlider';
import styles from './ChefsWord.module.scss';

const animationLeft = {
  hidden: {
    x: '-100%',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { transform: 0.8 }
  }
};

const animationRight = {
  hidden: {
    x: '100%',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { transform: 0.8 }
  }
};

const awards = [
  {
    title: 'Bib Gourmond',
    text: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: '../../../images/ChefsWord/icon2.png'
  },
  {
    title: 'Rising Star',
    text: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: '../../../images/ChefsWord/icon1.png'
  },
  {
    title: 'AA Hospitality ',
    text: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: '../../../images/ChefsWord/icon5.png'
  },
  {
    title: 'Outstanding Chef',
    text: 'Lorem ipsum dolor sit amet, consectetur.',
    icon: '../../../images/ChefsWord/icon3.png'
  }
];

export default function ChefsWord () {
  return (
    <section className={styles.chefsWord}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={styles.container}>
          <motion.div variants={animationRight} className={styles.image}>
            <ChefsWordSlider />
          </motion.div>
          <motion.div variants={animationLeft} className={styles.contant}>
            <Title className={styles.ChefsWordTitle} text="Awards & recognition" title="Our Laurels" />
            <div className={styles.awards}>
              <ul className={styles.awardsList}>
                {awards.map(el =>
                  <AwardItem
                    key={Math.random() * 10}
                    title={el.title}
                    text={el.text}
                    icon={el.icon}
                  />)}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const AwardItem = ({ title, text, icon }) => (
  <li className={styles.awardItem}>
    <div className={styles.itemImg}>
      <img src={icon} alt="The position of the rating" />
    </div>
    <div className={styles.itemContent}>
      <h5 className={styles.itemTitle}>{title}</h5>
      <p className={styles.itemText}>{text}</p>
    </div>
  </li>
);

AwardItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

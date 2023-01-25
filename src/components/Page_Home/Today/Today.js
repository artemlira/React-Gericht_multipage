import React from 'react';
import styles from './Today.module.scss';
import Button from './../../Button/Button';
import { motion } from 'framer-motion';
import Title from './../../Title/Title';



export default function Today() {
  const wine = [
    { name: 'Chapel Hill Shiraz', composition: 'AU | Bottle', price: '$56' },
    { name: 'Catena Malbec', composition: 'AR | Bottle', price: '$59' },
    { name: 'La Vieille Rosé', composition: 'FR | 750 ml', price: '$44' },
    { name: 'Rhino Pale Ale', composition: 'CA | 750 ml', price: '$31' },
    { name: 'Irish Guinness', composition: 'IE | 750 ml', price: '$26' },
  ];

  const cocktails = [
    { name: 'Aperol Spritz', composition: 'Aperol | Villa Marchesi prosecco | soda | 30ml', price: '$20' },
    { name: "Dark 'N' Stormy", composition: 'Dark rum | Ginger beer | Slice of lime. ', price: '$16' },
    { name: 'Daiquiri', composition: 'Rum | Citrus juice | Sugar', price: '$10' },
    { name: 'Old Fashioned', composition: 'Bourbon | Brown sugar | Angostura Bitters', price: '$31' },
    { name: 'Negroni', composition: 'Gin | Sweet Vermouth | Campari | Orange garnish', price: '$26' },
  ];

  const animatedLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { delay: 0, duration: 0.8 }
    },
  }

  const animatedRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { delay: 0, duration: 0.8 }
    },
  }

  return (
    <section className={styles.today}>
      <div className="container">
        <div className={styles.container}>
          <Title text="Menu that fits you palatte" title="Today’s Special" />
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4, once: true }}
            className={styles.contant}>
            <motion.div
              variants={animatedLeft}
              className={styles.wine}>
              <h4 className={styles.wineTitle}>Wine & Beer</h4>
              <ul className={styles.wineList}>
                {wine.map(i =>
                  <ItemMenu
                    key={Math.random() * 10}
                    name={i.name}
                    composition={i.composition}
                    price={i.price}
                    styles={styles}
                  />)}
              </ul>
            </motion.div>
            <div className={styles.image}></div>
            <motion.div
              variants={animatedRight}
              className={styles.cocktails}>
              <h4 className={styles.cocktailsTitle}>Cocktails</h4>
              <ul className={styles.cocktailsList}>
                {cocktails.map(i =>
                  <ItemMenu
                    key={Math.random() * 10}
                    name={i.name}
                    composition={i.composition}
                    price={i.price}
                    styles={styles}
                  />)}
              </ul>
            </motion.div>
          </motion.div>
          <div className={styles.button}>
            <Button text="View More" />
          </div>
        </div>
      </div>
    </section>
  );
}

const ItemMenu = ({ name, composition, price, styles }) => (
  <li className={styles.wrapperItem}>
    <div className={styles.ItemTitle}>
      <h6 className={styles.name}>{name}</h6>
      <p className={styles.price}>{price}</p>
    </div>
    <p className={styles.composition}>{composition}</p>
  </li>
)




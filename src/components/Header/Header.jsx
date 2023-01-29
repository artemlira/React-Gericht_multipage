import { motion } from 'framer-motion';
import React, { useState, forwardRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';


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

const setActive = ({ isActive }) => isActive ? 'active-header' : '';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <header id='header' className={styles.header}>
      <div className="container">
        <motion.div
          initial='hidden'
          animate="visible"
          exit="exit"
          className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">Gerícht</Link>
          </div>

          {!openMenu ? <Menu /> : <MMenu activ={true} variants={animation} />}

          <div className={styles.burgerMenu} onClick={() => setOpenMenu(!openMenu)}>
            <span className={!openMenu ? `${styles.menuTablet}` : `${styles.menuTablet} ${styles.active}`}></span>
          </div>
        </motion.div>
      </div>
    </header >
  );
}

const Menu = forwardRef(({ activ }, ref) => (
  <div className={!activ ? `${styles.navWrapper}` : `${styles.navWrapper} ${styles.active}`} ref={ref}>
    <nav className={!activ ? `${styles.nav}` : `${styles.active} ${styles.nav}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><NavLink to="/" className={setActive}>Home</NavLink></li>
        <li className={styles.navItem}><a href="#" className={styles.navLink}>Pages</a></li>
        <li className={styles.navItem}><NavLink to="contacts" className={setActive}>Contact Us</NavLink></li>
        <li className={styles.navItem}><a href="#" className={styles.navLink}>Blog</a></li>
        <li className={styles.navItem}><a href="#" className={styles.navLink}>Landing</a></li>
      </ul>
    </nav>
    <div className={!activ ? `${styles.registration}` : `${styles.active} ${styles.registration}`}>
      <div className={styles.logIn}>
        <a href="#">Log in / registration</a>
      </div>
      <div className={styles.table}>
        <a href="#reservation">book table</a>
      </div>
    </div>
  </div>
));

const MMenu = motion(Menu);




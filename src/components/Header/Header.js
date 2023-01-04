import React, { useState } from 'react';
import styles from './Header.module.scss';


export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="/">Gerícht</a>
          </div>
          <div className={!openMenu ? `${styles.navWrapper}` : `${styles.active} ${styles.navWrapper}`}>
            <nav className={!openMenu ? `${styles.nav}` : `${styles.active} ${styles.nav}`}>
              <ul className={styles.navList}>
                <li className={styles.navItem}><a href="" className={styles.navLink}>Home</a></li>
                <li className={styles.navItem}><a href="" className={styles.navLink}>Pages</a></li>
                <li className={styles.navItem}><a href="" className={styles.navLink}>Contact Us</a></li>
                <li className={styles.navItem}><a href="" className={styles.navLink}>Blog</a></li>
                <li className={styles.navItem}><a href="" className={styles.navLink}>Landing</a></li>
              </ul>
            </nav>
            <div className={!openMenu ? `${styles.registration}` : `${styles.active} ${styles.registration}`}>
              <div className={styles.logIn}>
                <a href="">Log in / registration</a>
              </div>
              <div className={styles.table}>
                <a href="">book table</a>
              </div>
            </div>
          </div>
          <div className={styles.burgerMenu} onClick={() => setOpenMenu(!openMenu)}>
            <span className={!openMenu ? `${styles.menuTablet}` : `${styles.menuTablet} ${styles.active}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
}




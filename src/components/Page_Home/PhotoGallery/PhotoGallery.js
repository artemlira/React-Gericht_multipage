import React from 'react';
import styles from './PhotoGallery.module.scss';
import Title from '../../Title/Title';



export default function PhotoGallery() {
  return (
    <section className={styles.photoGallery}>
      <div className="container">
        <div className={styles.container}>
          <div className="content">
            <Title text="Instagram" title="Photo Gallery" />
          </div>
          <div className="gallery"></div>
        </div>
      </div>
    </section>
  );
}




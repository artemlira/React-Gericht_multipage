import React, { useContext } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import styles from './Blog.module.scss';
import { GerichtContext } from './../../Context';

export default function Blog () {
  const { openBlogDetail } = useContext(GerichtContext);
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.publication}>
            <p className={styles.data}>{openBlogDetail.data}</p>
            <p className={styles.author}>{openBlogDetail.author}</p>
          </div>
          <div className={styles.title}>
            <h4>{openBlogDetail.title}</h4>
          </div>
          <div className={styles.image}>
            {isWebpSupported()
              ? <img src={openBlogDetail.imgWebp} alt={openBlogDetail.title} />
              : <img src={openBlogDetail.img} alt={openBlogDetail.title} />}
          </div>
        </div>
      </div>
    </section>
  );
}

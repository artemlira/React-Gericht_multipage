import React, { forwardRef } from 'react';
import styles from './Blog.module.scss';
import Button from './../../Button/Button';
import { motion } from 'framer-motion';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import Title from '../../Title/Title';

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const contentCards = [
  {
    img: '../../../images/Blogs/01.jpg',
    imgWebp: '../../../images/Blogs/01.webp',
    data: '16 Apr 2021',
    author: '- Annalisa L',
    title: 'tips for prepping and caring for your grill',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    link: 'Read More',
  },
  {
    img: '../../../images/Blogs/02.jpg',
    imgWebp: '../../../images/Blogs/02.webp',
    data: '23 May 2021',
    author: '-John Micheal',
    title: 'summer cocktails and mocktails',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    link: 'Read More',
  },
  {
    img: '../../../images/Blogs/03.jpg',
    imgWebp: '../../../images/Blogs/03.webp',
    data: '06 Aug 2021',
    author: '-Fred W',
    title: 'easy cooking for college students',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    link: 'Read More',
  },
]


export default function Blog() {
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <Title text="Blogs" title="Gerícht updates" />
          <div className={styles.content}>
            <motion.ul
              initial='hidden'
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={styles.cardsList}>
              {contentCards.map((el, index) =>
                <MCardItem
                  custom={index + 1}
                  variants={animation}
                  key={Math.random() * 10}
                  img={el.img}
                  imgWebp={el.imgWebp}
                  data={el.data}
                  author={el.author}
                  title={el.title}
                  text={el.text}
                  link={el.link}
                />)}
            </motion.ul>
          </div>
          <Button text='View More' />
        </div>
      </div>
    </section>
  );
}

const CardItem = forwardRef(({ title, text, img, imgWebp, data, author, link }, ref) => (
  <li className={styles.cardItem} ref={ref}>
    <div className={styles.itemImg}>
      {isWebpSupported()
        ? <img src={imgWebp} alt={title} />
        : <img src={img} alt={title} />}
    </div>
    <div className={styles.itemContent}>
      <div className={styles.itemPublication}>
        <p className={styles.publicationData}>{data}</p>
        <p className={styles.publicationAuthor}>{author}</p>
      </div>
      <div className={styles.itemTitle}>
        <h5>{title}</h5>
      </div>
      <div className={styles.itemText}>
        <p>{text}</p>
      </div>
      <div className={styles.itemLink}>
        <a href="/">{link}</a>
      </div>
    </div>
  </li>
));

const MCardItem = motion(CardItem);



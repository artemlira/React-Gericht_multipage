import React from 'react';
import styles from './Menu.module.scss';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import './MenuSlider.scss'
import "swiper/css/effect-fade";

export default function Menu() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className, text = ['Bar Menu', 'Desserts Menu', 'Food Menu']) {
      return '<span class="' + className + '">' + (text[index]) + "</span>";
    },
  };

  return (
    <section className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.bgIcon}></div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{ delay: 1500, stopOnLastSlide: false, disableOnInteraction: true }}
          speed={800}
          pagination={pagination}
          modules={[Autoplay, EffectFade, Pagination]}
          loop={true}
          className={styles.menuSwiper}>
          <SwiperSlide className={styles.wrapperImg}>
            <Image src={require('../../../images/Menu/bar.jpg')} webp={require('../../../images/Menu/bar.webp')} alt="bar" />
          </SwiperSlide>
          <SwiperSlide className={styles.wrapperImg}>
            <Image src={require('../../../images/Menu/desert.jpg')} webp={require('../../../images/Menu/desert.webp')} alt="desert" />
          </SwiperSlide>
          <SwiperSlide className={styles.wrapperImg}>
            <Image src={require('../../../images/Menu/food.jpg')} webp={require('../../../images/Menu/food.webp')} alt="food" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}




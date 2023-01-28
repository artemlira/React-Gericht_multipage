import React from 'react';
import Button from '../../Button/Button';
import styles from './Hero.module.scss';
import logo from '../../../images/Hero/iconLogo.svg';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";
import 'swiper/css';


export default function Hero() {

  const pagination = {
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return '0<span class="' + currentClass + '"></span>' + ' - 0' + '<span class="' + totalClass + '"></span>'
    },
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.contant}>
            <div className={styles.logo}>
              <p className={styles.logoText}>Chase the new Flavour</p>
              <div className={styles.logoImg}><img src={logo} alt="logo" /></div>
            </div>
            <h2 className={styles.title}>The key to Fine dining</h2>
            <p className={styles.text}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <Button text="Explore Menu" />
          </div>
          <div className={styles.sliderWrapper}>
            <Swiper
              className={styles.slider}
              direction={"vertical"}
              centeredSlides={true}
              modules={[Pagination, EffectCreative, Autoplay, Navigation]}
              effect={"creative"}
              creativeEffect={{
                prev: { shadow: false, translate: [0, 0, 0], },
                next: { translate: [0, "-100%", 0], },
              }}
              spaceBetween={50} // отступ между слайдерами
              slidesPerView={1}  //кол-во слайдеров
              pagination={pagination}
              loop={true}//бесконечность
              autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
              speed={1500}>
              <SwiperSlide className={styles.slide}>
                <Image src={require('../../../images/Hero/slide1.jpg')} webp={require('../../../images/Hero/slide1.webp')} alt="slide1" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <Image src={require('../../../images/Hero/slide2.jpg')} webp={require('../../../images/Hero/slide2.webp')} alt="slide2" />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <Image src={require('../../../images/Hero/slide3.jpg')} webp={require('../../../images/Hero/slide3.webp')} alt="slide3" />
              </SwiperSlide>
            </Swiper>
            <span className={styles.scroll}>Scroll</span>
          </div>

        </div>
      </div>
    </section >
  );
}



import React from 'react';

import styles from './Banner.module.css';

import Logo from '../../../assets/images/logo.png';
import SurfBoard from '../../../assets/images/surfboard.svg';


function Banner() {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <nav className={styles.navigation}>
          <img src={Logo} alt="logo" className={styles.LogoImg}/>
          <a href="/#" className={styles.navigationA}>О нас</a>
          <a href="/#" className={styles.navigationA}>Услуга</a>
          <a href="/#" className={styles.navigationA}>Стоимость</a>
          <a href="/#" className={styles.navigationA}>Блог</a>
          <a href="/#" className={styles.navigationA}>Команда</a>
          <a href="/#" className={styles.navigationA}>Контакты</a>
        </nav>
        <div className={styles.title}>
          <h1>WAWE</h1>
          <h4>Школа серфинга на канарских Островах</h4>
        </div>
        <img src={SurfBoard} alt="" className={styles.SurfBoardImg}/>
      </div>
    </div>
  );
}

export default Banner;
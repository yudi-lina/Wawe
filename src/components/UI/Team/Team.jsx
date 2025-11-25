import React from 'react';

import styles from './Team.module.css';
import Mike from '../../../assets/images/person1.png';
import Mary from '../../../assets/images/person2.png';
import Olga from '../../../assets/images/person3.png';


function Team() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>НАША КОМАНДА</div>
      <div className={styles.section}>
        <div className={styles.person}>
          <img src={Mike} alt="photo" />
          <div className={styles.person_name}>
            <h6>Майк</h6>
            <p>Главный инстуктор</p>
          </div>
        </div>

        <div className={styles.person}>
          <img src={Mary} alt="photo" />
          <div className={styles.person_name}>
            <h6>Мэри</h6>
            <p>Инструктор</p>
          </div>
        </div>

        <div className={styles.person}>
          <img src={Olga} alt="photo" />
          <div className={styles.person_name}>
            <h6>Ольга</h6>
            <p>Инструктор</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
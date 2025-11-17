import React from 'react';

import Sun from '../../../assets/images/sun.svg';
import Plane from '../../../assets/images/plane.svg';
import Wawe from '../../../assets/images/wawe.svg';
import Interest1 from '../../../assets/images/interest1.svg';
import Interest2 from '../../../assets/images/interest2.svg';
import Interest3 from '../../../assets/images/interest3.svg';

import styles from './Get.module.css';

function Get() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>В  ШКОЛЕ ВЫ ПОЛУЧИТЕ</div>
      <div className={styles.get}>
        <div className={styles.get_list}>

          <div className={styles.get_list_item}>
            <div className={styles.get_list_item_head}>
              <img src={Sun} alt="" />
              <h5>ПРОЖИВАНИЕ</h5>
            </div>
            <p>Наша школа серфинга находится в 100 м от океанского побережья. К услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней террасы открывается вид на океан. Расстояние до центра города 15 мин. </p>
          </div>

          <div className={styles.get_list_item}>
            <div className={styles.get_list_item_head}>
              <img src={Plane} alt="" />
              <h5>ПЕРЕЛЕТ И СТРАХОВКУ</h5>
            </div>
            <p>Все участники программы застрахованы страховой компанией Allianz. Перелет из Тенерифе до острова Лансароте  и обратно входит в стоимость программы</p>
          </div>

          <div className={styles.get_list_item}>
            <div className={styles.get_list_item_head}>
              <img src={Wawe} alt="" />
              <h5>ОБУЧЕНИЕ И ЭКИПИРОВКУ</h5>
            </div>
            <p>Все оборудование и экипировка известных производителей и предоставляется на весь курс программы. Тренировочный процесс начинается с определения вашего уровня катания </p>
          </div>

        </div>

        <div className={styles.footer}>
          <div className={styles.get_percent}>

            <div className={styles.get_percent_item}>
              <div className={styles.get_percent_item_head}>
                <img src={Interest1} alt="" />
                <p>85%</p>
              </div>
              <p>Приехали второй раз</p>
            </div>

            <div className={styles.get_percent_item}>
              <div className={styles.get_percent_item_head}>
                <img src={Interest2} alt="" />
                <p>95%</p>
              </div>
              <p>Научились кататься</p>
            </div>

            <div className={styles.get_percent_item}>
              <div className={styles.get_percent_item_head}>
                <img src={Interest3} alt="" />
                <p>99%</p>
              </div>
              <p>Довольных клиентов</p>
            </div>

          </div>
          <div className={styles.get_about}>
            <p>Огромным преимуществом нашей школы является собственная методика обучения. Мы разработали собственный стиль обучения серфингу, который позволяет новичкам максимально быстро встать на доску. </p>
            <p>Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа соответствует всем мировым стандартам. Переаттестация производится ежегодно и это позволяет нам всегда стремиться к улучшению обучения.</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
  export default Get;
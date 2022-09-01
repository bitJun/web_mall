import { useState } from 'react';
import styles from './index.module.less';

const Modular = (props) => {
  return (
    <div className={styles.modular_view}>
      <h3 className={styles.modular_view_title}>{props?.title}</h3>
      <div className={styles.modular_view_list}>
        <div className={styles.modular_view_list_one}>
          <img
            src='/static/images/banner1.png'
            className={styles.modular_view_list_one_img1}
          />
          <img
            src='/static/images/banner2.png'
            className={styles.modular_view_list_one_img2}
          />
        </div>
        <div className={styles.modular_view_list_two}>
          <img
            src='/static/images/banner3.png'
            className={styles.modular_view_list_two_img1}
          />
          <img
            src='/static/images/banner4.png'
            className={styles.modular_view_list_two_img2}
          />
        </div>
        <div className={styles.modular_view_list_three}>
          <img
            src='/static/images/banner5.png'
            className={styles.modular_view_list_three_img1}
          />
          <img
            src='/static/images/banner6.png'
            className={styles.modular_view_list_three_img2}
          />
        </div>
      </div>
    </div>
  )
}
export default Modular;
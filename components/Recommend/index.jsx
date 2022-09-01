import { useState } from 'react';
import styles from './index.module.less';

const Recommend = (props) => {
  return (
    <div className={styles.recommend_view}>
      <div className={styles.recommend_view_header}>
        {props?.title}
        <span>{props?.desc}</span>
      </div>
      {
        props.list.length == 3 &&
        <div className={styles.recommend_view_lists}>
          <img
            src='/static/images/img1.png'
            className={styles.recommend_view_lists_item}
          />  
          <div className={styles.recommend_view_lists_item}>
            <img
              src='/static/images/img2.png'
              className={styles.recommend_view_lists_item_single}
            />  
            <img
              src='/static/images/img3.png'
              className={styles.recommend_view_lists_item_single}
            />
          </div>  
        </div>
      }
      {
        props.list.length == 4 &&
        <div className={styles.recommend_view_list}>
          <img
            src='/static/images/img1.png'
            className={styles.recommend_view_list_item}
          />  
          <img
            src='/static/images/img2.png'
            className={styles.recommend_view_list_item}
          />  
          <img
            src='/static/images/img3.png'
            className={styles.recommend_view_list_item}
          />  
          <img
            src='/static/images/img3.png'
            className={styles.recommend_view_list_item}
          />  
        </div>
      }
    </div>
  )
}
export default Recommend;
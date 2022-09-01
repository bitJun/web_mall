import { useState } from 'react';
import GoodsItem from '@/components/GoodsItem';
import styles from './index.module.less';

const User = (props) => {
  return (
    <div className={styles.user_view}>
      <div className={styles.user_view_info}>
        <img
          src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2Fae51f3deb48f8c54d644b0120a48ccffe1fe7fe7.jpeg%3Ftoken%3Da8dca854a96ab09ec8137c79bc824f42&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1662051600&t=224824c5b5871c6b8d8ff10bd6984b4f'
          className={styles.user_view_info_logo}
        />
        <div className={styles.user_view_info_detail}>
          <div className={styles.user_view_info_detail_name}>
            阿拉蕾的小铺子
          </div>
          <div className={styles.user_view_info_detail_location}>浙江 杭州</div>
        </div>
      </div>
      <div className={styles.user_view_order}>
        <div className={styles.user_view_order_item}>
          待付款
          <span className={styles.user_view_order_item_num}>0</span>
        </div>
        <div className={styles.user_view_order_item}>
          待发货
          <span className={styles.user_view_order_item_num}>1</span>
        </div>
        <div className={styles.user_view_order_item}>
          待收货
          <span className={styles.user_view_order_item_num}>2</span>
        </div>
        <div className={styles.user_view_order_item}>
          退款
          <span className={styles.user_view_order_item_num}>3</span>
        </div>
      </div>
      <div className={styles.user_view_goods}>
        <h3 className={styles.user_view_goods_title}>商品推荐</h3>
        <div className={styles.user_view_goods_list}>
          {
            [1,2,3,4,5,6,7,8,9].map(item=>
              <div
                className={styles.user_view_goods_list_item}
                key={item}
              >
                <GoodsItem
                  img='https://img10.360buyimg.com/ceco/s150x150_jfs/t1/140639/38/15125/38170/5fb63195Ea2a563f1/18ed7df2cc89e759.jpg!q70.jpg.avif'
                  goodsName='苹果 背光键盘 轻薄笔记本'
                  price='9999.00'
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default User;
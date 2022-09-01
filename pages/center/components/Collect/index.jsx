import { useState } from 'react';
import GoodsItem from '@/components/GoodsItem';
import styles from './index.module.less';

const Collect = (props) => {
  return (
    <div className={styles.collect_view}>
      <div className={styles.collect_view_header}>我的收藏</div>
      <div className={styles.collect_view_list}>
        {
          [1,2,3,4,5,6,7,8,9].map(item=>
            <div
              className={styles.collect_view_list_item}
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
  )
}
export default Collect;
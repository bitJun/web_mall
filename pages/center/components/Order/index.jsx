import { useState } from 'react';
import {
  Pagination
} from 'antd';
import styles from './index.module.less';

const Order = (props) => {
  const showTotal = (total) => `共 ${total} 项`;
  return (
    <div className={styles.order_view}>
      <h3 className={styles.order_view_header}>我的订单</h3>
      <div className={styles.order_view_main}>
        <div className={styles.order_view_main_tooltips}>
          <div className={styles.order_view_main_tooltips_shop}>店铺信息</div>
          <div className={styles.order_view_main_tooltips_goods}>商品信息</div>
          <div className={styles.order_view_main_tooltips_num}>数量</div>
          <div className={styles.order_view_main_tooltips_total}>小计</div>
        </div>
        <div className={styles.order_view_main_list}>
          {
            [1,2,3,4,5,6,7,8,9].map(item=>
              <div
                className={styles.order_view_main_list_item}
                key={item}
              >
                <h3 className={styles.order_view_main_list_item_title}>店铺：浙江仲基贸易有限公司</h3> 
                <div className={styles.order_view_main_list_item_content}>
                  <div className={styles.order_view_main_list_item_content_info}>
                    <img
                      src='https://img10.360buyimg.com/ceco/s150x150_jfs/t1/140639/38/15125/38170/5fb63195Ea2a563f1/18ed7df2cc89e759.jpg!q70.jpg.avif'
                      className={styles.order_view_main_list_item_content_info_img}
                    />
                    <div className={styles.order_view_main_list_item_content_info_container}>
                      <div className={styles.order_view_main_list_item_content_info_container_name}>扫地机器人 纯色设计感扫地拖把</div>
                      <div className={styles.order_view_main_list_item_content_info_container_desc}>包邮 | 金色</div>
                    </div>
                  </div>
                  <div className={styles.order_view_main_list_item_content_num}>100</div>
                  <div className={styles.order_view_main_list_item_content_price}>6999.00</div>
                </div>
                <div className={styles.order_view_main_list_item_footer}>
                  <span className={styles.order_view_main_list_item_footer_createtime}>2022.09.12  12:09:01</span>
                  <div className={styles.order_view_main_list_item_footer_fee}>
                    运费：<span className={styles.order_view_main_list_item_footer_fee_num}>0.00</span>元
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className={styles.order_view_footer}>
          <Pagination
            size="small"
            total={50}
            disabled
            showTotal={showTotal}
            showSizeChanger
            showQuickJumper
          />
        </div>
      </div>
    </div>
  )
}
export default Order;
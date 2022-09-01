import { useState } from 'react';
import {
  Radio
} from 'antd';
import styles from './index.module.less';

const ComfirmOrder = (props) => {
  const [addressId, setAddressId] = useState(1);

  return (
    <div className={styles.comfirm_view}>
      <div className={styles.comfirm_view_main}>
        <div className={styles.comfirm_view_main_address}>
          <div className={styles.comfirm_view_main_address_action}>
            管理收货地址
          </div>
          <div className={styles.comfirm_view_main_address_list}>
            {
              [1,2,3].map(item=>
                <div
                  className={`${styles.comfirm_view_main_address_list_item} ${item === addressId ? `${styles.active}` : ''}`}
                  key={item}
                >
                  <Radio>安徽省马栏山区东新街道25号 淮北国际1</Radio>
                </div>
              )
            }
          </div>
        </div>
        <div className={styles.comfirm_view_main_content}>
          <div className={styles.comfirm_view_main_content_tooltips}>
            <div className={styles.comfirm_view_main_content_tooltips_shop}>店铺信息</div>
            <div className={styles.comfirm_view_main_content_tooltips_goods}>商品信息</div>
            <div className={styles.comfirm_view_main_content_tooltips_num}>数量</div>
            <div className={styles.comfirm_view_main_content_tooltips_total}>小计</div>
          </div>
          <div className={styles.comfirm_view_main_content_list}>
            {
              [1,2,3,4,5,6,7,8,9].map(item=>
                <div
                  className={styles.comfirm_view_main_content_list_item}
                  key={item}
                >
                  <h3 className={styles.comfirm_view_main_content_list_item_title}>店铺：浙江仲基贸易有限公司</h3> 
                  <div className={styles.comfirm_view_main_content_list_item_content}>
                    <div className={styles.comfirm_view_main_content_list_item_content_info}>
                      <img
                        src='https://img10.360buyimg.com/ceco/s150x150_jfs/t1/140639/38/15125/38170/5fb63195Ea2a563f1/18ed7df2cc89e759.jpg!q70.jpg.avif'
                        className={styles.comfirm_view_main_content_list_item_content_info_img}
                      />
                      <div className={styles.comfirm_view_main_content_list_item_content_info_container}>
                        <div className={styles.comfirm_view_main_content_list_item_content_info_container_name}>扫地机器人 纯色设计感扫地拖把</div>
                        <div className={styles.comfirm_view_main_content_list_item_content_info_container_desc}>包邮 | 金色</div>
                      </div>
                    </div>
                    <div className={styles.comfirm_view_main_content_list_item_content_num}>100</div>
                    <div className={styles.comfirm_view_main_content_list_item_content_price}>6999.00</div>
                  </div>
                  <div className={styles.comfirm_view_main_content_list_item_footer}>
                    <div className={styles.comfirm_view_main_content_list_item_footer_fee}>
                      运费：<span className={styles.comfirm_view_main_content_list_item_footer_fee_num}>0.00</span>元
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className={styles.comfirm_view_main_footer}>
          <span className={styles.comfirm_view_main_footer_desc}>合计</span>
          <span className={styles.comfirm_view_main_footer_price}>¥6999.00</span>
          <div className={styles.comfirm_view_main_footer_action}>提交订单</div>
        </div>
      </div>
    </div>
  )
}
export default ComfirmOrder;
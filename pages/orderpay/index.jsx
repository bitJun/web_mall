import { useState } from 'react';
import { withRouter } from 'next/router';
import styles from './index.module.less';

const OrderPay = (props) => {
  const [showResult, setShowResult] = useState(true)
  return (
    <div className={styles.pay_view}>
      <div className={styles.pay_view_header}>
        支付金额
        <span className={styles.pay_view_header_num}>2099.09</span>
        <span className={styles.pay_view_header_unit}>元</span>
      </div>
      <div className={styles.pay_view_title}>扫码支付</div>
      {
        showResult ? (
          <div className={styles.pay_view_result}></div>
        ) : (
          <div className={styles.pay_view_main}>
            <div className={styles.pay_view_main_info}>
              <div className={styles.pay_view_main_info_code}>
                <img
                  src='https://img10.360buyimg.com/ceco/s150x150_jfs/t1/140639/38/15125/38170/5fb63195Ea2a563f1/18ed7df2cc89e759.jpg!q70.jpg.avif'
                  className={styles.pay_view_main_info_code_img}
                />
              </div>
              <div className={styles.pay_view_main_info_detail}>
                <div className={styles.pay_view_main_info_detail_item}>
                  {/* <img
                    src=''
                    className={styles.pay_view_main_info_detail_item_icon}
                  /> */}
                  微信扫码支付
                </div>
                <div className={styles.pay_view_main_info_detail_item}>
                  {/* <img
                    src=''
                    className={styles.pay_view_main_info_detail_item_icon}
                  /> */}
                  支付宝扫码支付
                </div>
              </div>
            </div>
            <div className={styles.pay_view_main_conact}>
              支付遇到问题 联系客服
              <img
                src='/static/images/kefu.png'
                className={styles.pay_view_main_conact_icon}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}
export default withRouter(OrderPay);
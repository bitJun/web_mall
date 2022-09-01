import { useState } from 'react';
import {
  Checkbox,
  InputNumber
} from 'antd'
import Header from '@/components/Header';
import styles from './index.module.less';

const Cart = (props) => {
  const [isCheckAll, setIsCheckAll] = useState(true);
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setIsCheckAll(e.target.checked)
  };
  const handleChange = (value) => {
    // console.log('value', value)
  }
  return (
    <div className={styles.cart_view}>
      <Header
        title='Create Next App Test'
        content='Generated by create next app'
        description='Generated by create next app'
      />
      <div className={styles.cart_view_container}>
        <div className={styles.cart_view_container_header}>
          <div className={styles.cart_view_container_header_num}>购物车（共5件）</div>
          <div className={styles.cart_view_container_header_info}>
            已选商品（不含运费）
            <span className={styles.cart_view_container_header_info_price}>¥6999.00</span>
            <div className={styles.cart_view_container_header_info_action}>结算</div>
          </div>
        </div>
        <div className={styles.cart_view_container_main}>
          <div className={styles.cart_view_container_main_tooltips}>
            <div className={styles.cart_view_container_main_tooltips_checkall}>
              <Checkbox
                onChange={onChange}
                checked={isCheckAll}
              >
                全选
              </Checkbox>
            </div>
            <p className={styles.cart_view_container_main_tooltips_goods}>商品信息</p>
            <p className={styles.cart_view_container_main_tooltips_num}>数量</p>
            <p className={styles.cart_view_container_main_tooltips_actions}>操作</p>
          </div>
          {
            [0,1,2,3,4,5,6,7,8,9].map(item=>
              <section key={item} className={styles.cart_view_container_main_section}>
                <div className={styles.cart_view_container_main_section_header}>
                  <Checkbox
                    onChange={onChange}
                  >
                    店铺：浙江仲基贸易有限公司
                  </Checkbox>
                </div>
                {
                  [1,2,3,4].map(json=>
                    <div className={styles.cart_view_container_main_section_item} key={json}>
                      <div className={styles.cart_view_container_main_section_item_checkbox}>
                        <Checkbox
                          onChange={onChange}
                        />
                      </div>
                      <div className={styles.cart_view_container_main_section_item_goods}>
                        <img
                          src='/static/images/banner.png'
                          className={styles.cart_view_container_main_section_item_goods_img}
                        />
                        <div className={styles.cart_view_container_main_section_item_goods_content}>
                          <p className={styles.cart_view_container_main_section_item_goods_content_name}>扫地机器人 纯色设计感扫地拖把</p>
                          <p className={styles.cart_view_container_main_section_item_goods_content_price}>¥2099.09</p>
                          <p className={styles.cart_view_container_main_section_item_goods_content_desc}>包邮 | 金色</p>
                        </div>
                      </div>
                      <div className={styles.cart_view_container_main_section_item_operates}>
                        <div className={styles.cart_view_container_main_section_item_operates_min}>-</div>
                        <InputNumber
                          onChange={handleChange}
                          value={1}
                        />
                        <div className={styles.cart_view_container_main_section_item_operates_add}>+</div>
                      </div>
                      <div className={styles.cart_view_container_main_section_item_action}>删除</div>
                    </div>
                  )
                }
              </section>  
            )
          }
        </div>
        <div className={styles.cart_view_container_footer}>
          <div className={styles.cart_view_container_footer_all}>
            <Checkbox
              onChange={onChange}
              checked={isCheckAll}
            >
              全选
            </Checkbox>
            <p className={styles.cart_view_container_footer_all_desc}>
              已选 <span className={styles.cart_view_container_footer_all_desc_num}>5</span> 件
            </p>
          </div>
          <div className={styles.cart_view_container_footer_info}>
            <span className={styles.cart_view_container_footer_info_desc}>合计（不含运费）</span>
            <span className={styles.cart_view_container_footer_info_price}>¥6999.00</span>
            <a className={styles.cart_view_container_footer_info_action}>结算</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart;
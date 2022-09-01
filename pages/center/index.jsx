import { useState } from 'react';
import Router, { withRouter } from 'next/router';
import Address from './components/Address';
import Cart from './components/Cart';
import Collect from './components/Collect';
import Order from './components/Order';
import User from './components/User';
import styles from './index.module.less';

const UserCnter = (props) => {
  let {
    type
  } = props?.router?.query;
  return (
    <div className={styles.center_view}>
      <div className={styles.center_view_nav}>
        <div
          className={`${styles.center_view_nav_item} ${type === 'user' ? `${styles.active}` : ''}`}
          onClick={()=>{
            Router.push({
              pathname: '/center',
              query: { type: 'user' },
            })
          }}
        >
            个人中心
        </div>
        <div
          className={`${styles.center_view_nav_item} ${type === 'address' ? `${styles.active}` : ''}`}
          onClick={()=>{
            Router.push({
              pathname: '/center',
              query: { type: 'address' },
            })
          }}
        >
            我的收货地址
        </div>
        <div
          className={`${styles.center_view_nav_item} ${type === 'cart' ? `${styles.active}` : ''}`}
          onClick={()=>{
            Router.push({
              pathname: '/center',
              query: { type: 'cart' },
            })
          }}
        >
            我的购物车
        </div>
        <div
          className={`${styles.center_view_nav_item} ${type === 'order' ? `${styles.active}` : ''}`}
          onClick={()=>{
            Router.push({
              pathname: '/center',
              query: { type: 'order' },
            })
          }}
        >
            我的订单
        </div>
        <div
          className={`${styles.center_view_nav_item} ${type === 'collect' ? `${styles.active}` : ''}`}
          onClick={()=>{
            Router.push({
              pathname: '/center',
              query: { type: 'collect' },
            })
          }}
        >
            我的收藏
        </div>
      </div>
      <div className={styles.center_view_content}>
        {
          type === 'user' && <User />
        }
        {
          type === 'address' && <Address />
        }
        {
          type === 'cart' && <Cart />
        }
        {
          type === 'order' && <Order />
        }
        {
          type === 'collect' && <Collect />
        }
      </div>
    </div>
  )
}
export default withRouter(UserCnter);
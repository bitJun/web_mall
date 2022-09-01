import { useState } from 'react';
import Router from 'next/router';
import {
  Cascader,
  Input,
  Select,
  Space
} from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './index.module.less';
const Navbar = (props) => {
  const { Search } = Input;
  const { Option } = Select;
  const [keywords] = useState([
    {
      id: 0,
      name: '微波炉',
    },
    {
      id: 1,
      name: '电烤炉',
    },
    {
      id: 2,
      name: 'iPhone13',
    },
    {
      id: 3,
      name: '戴森吹风机',
    },
    {
      id: 4,
      name: '空气循环风扇',
    }
  ])
  const router = useRouter();
  let {
    asPath,
    pathname
  } = router;
  const onSearch = (value) => {
  }
  const goRouter = (url) => {
    Router.push(url);
  }
  const selectBefore = (
    <Select defaultValue="0" className="select-before">
      <Option value="0">商品</Option>
      <Option value="1">实物</Option>
    </Select>
  );
  
  if (['/login', '/register', '/findpwd'].indexOf(asPath) != -1) {
    return (
      <header className={styles.navbar_main}>
        <div className={styles.navbar_main_view}>
          <div className={styles.navbar_main_view_logo}>
            <Image
              src={require('@/static/images/logo.png')}
              width={150}
              height={30}
              alt=''
            />
          </div>
        </div>
      </header>
    )
  } else {
    return (
      <>
        <header className={styles.navbar_view}>
          <div className={styles.navbar_view_top}>
            <div className={styles.navbar_view_top_main}>
              <p className={styles.navbar_view_top_main_desc}>
                <span onClick={()=>{goRouter('/register')}}>注册</span>/
                <span onClick={()=>{goRouter('/login')}}>登录</span>
              </p>
              <p
                className={styles.navbar_view_top_main_desc}
                onClick={()=>{
                  Router.push({
                    pathname: '/center',
                    query: { type: 'order' },
                  })
                }}
              >
                我的订单
              </p>
              <p
                className={styles.navbar_view_top_main_desc}
                onClick={()=>{
                  Router.push({
                    pathname: '/center',
                    query: { type: 'collect' },
                  })
                }}
              >
                我的收藏
              </p>
              <p
                className={styles.navbar_view_top_main_desc}
              >
                客户服务
              </p>
              <p
                className={styles.navbar_view_top_main_desc}
              >
                小程序
              </p>
            </div>
          </div>
          <div className={styles.bgWhite}>
            <div className={styles.navbar_view_content}>
              <div className={styles.navbar_view_content_logo}>
                <Image
                  src={require('@/static/images/logo.png')}
                  width={150}
                  height={30}
                  alt=''
                  onClick={()=>{Router.push('/')}}
                />
              </div>
              {
                ['/', '/cart', '/category', '/section'].indexOf(pathname) != -1 &&
                <div className={styles.navbar_view_content_search}>
                  <Search
                    addonBefore={selectBefore}
                    placeholder="请输入产品名进行搜索"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    onSearch={onSearch}
                  />
                  <div className={styles.navbar_view_content_search_keyword}>
                    {
                      keywords && keywords.map(item=>
                        <label
                          className={styles.navbar_view_content_search_keyword_text}
                          key={item?.id}
                        >
                          {item?.name}
                        </label>
                      )
                    }
                  </div>
                </div>
              }
              {
                ['/', '/cart', '/category', '/section'].indexOf(pathname) != -1 &&
                <div
                  className={styles.navbar_view_content_cart}
                  onClick={()=>{goRouter('/cart')}}
                >
                  <Image
                    src={require('@/static/images/cart.png')}
                    width={24}
                    height={24}
                  />
                  <label className={styles.navbar_view_content_cart_text}>购物车</label>
                  <span className={styles.navbar_view_content_cart_num}>2</span>
                </div>
              }
            </div>
          </div>
        </header>
      </>
    )
  }
}
export default Navbar;
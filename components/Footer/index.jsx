import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './index.module.less';

const Footer = (props) => {
  const router = useRouter();
  let {
    asPath
  } = router;
  const [navList] = useState([
    {
      id: 0,
      icon: require('../../static/images/footer/icon1.png'),
      name: '全品类,一站采购',
    },
    {
      id: 1,
      icon: require('../../static/images/footer/icon2.png'),
      name: '价格低,天天优惠',
    },
    {
      id: 2,
      icon: require('../../static/images/footer/icon3.png'),
      name: '品质优,正品保证',
    },
    {
      id: 3,
      icon: require('../../static/images/footer/icon4.png'),
      name: '服务好,售后无忧',
    }
  ]);
  if (asPath === '/login') {
    return (
      <footer className={styles.footer_main}>
        <p className={styles.footer_main_beian}>
          <span>浙江米粒科技有限公司  |  浙ICP备17014859号-9</span>
          <span>关于我们 | 联系我们 | 意见反馈 | 帮助中心 | 法律声明 | 隐私权政策</span>
        </p>
      </footer>
    )
  } else {
    return (
      <footer className={styles.footer_view}>
        <div className={styles.footer_view_main}>
          <div className={styles.footer_view_main_nav}>
            {
              navList && navList.map(item=>
                <div
                  className={styles.footer_view_main_nav_item}
                  key={item?.id}
                >
                  {/* <img
                    src={item?.icon}
                    className={styles.footer_view_main_nav_item_icon}
                    alt=''
                  /> */}
                  <Image
                    src={item?.icon}
                    width={58}
                    height={58}
                    className={styles.footer_view_main_nav_item_icon}
                  />
                  <p className={styles.footer_view_main_nav_item_text}>{item?.name}</p>
                </div>
              )
            }
          </div>
          <p className={styles.footer_view_main_beian}>
            <span>浙江米粒科技有限公司  |  浙ICP备17014859号-9</span>
            <span>关于我们 | 联系我们 | 意见反馈 | 帮助中心 | 法律声明 | 隐私权政策</span>
          </p>
        </div>
      </footer>
    )
  }
}
export default Footer;
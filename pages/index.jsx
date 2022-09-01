import { useState } from 'react';
import {
  Carousel
} from 'antd';
import Header from '@/components/Header';
import GoodsItem from '@/components/GoodsItem';
import Recommend from '@/components/Recommend';
import Modular from '@/components/Modular';
import Navgation from '@/components/Navgation';
import styles from '@/static/styles/index.module.less';

export default function Home() {
  const [banners] = useState([
    {
      id: 0,
      url: '../static/images/banner.png'
    },
    {
      id: 1,
      url: '../static/images/banner.png'
    }
  ]);
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <>
      <Header
        title='Create Next App Test'
        content='Generated by create next app'
        description='Generated by create next app'
      />
      <main className={styles.index_view}>
        <div>
          <Navgation />
          <Carousel afterChange={onChange}>
            {
              banners && banners.map(item=>
                <img
                  key={item?.id}
                  src={item?.url}
                  className={styles.index_view_banner}
                />  
              )
            }
          </Carousel>
        </div>
        <div className={styles.index_view_list}>
          {
            [1,2,3,4].map(item=>
              <div
                key={item}
                className={styles.index_view_list_item}
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
        <div className={styles.index_view_recommend}>
          <div className={styles.index_view_recommend_item}>
            <Recommend
              title='新品推荐'
              desc='NEW PRODUCTS'
              list={[1,2,3]}
            />
          </div>
          <div className={styles.index_view_recommend_item}>
            <Recommend
              title='新品推荐'
              desc='NEW PRODUCTS'
              list={[1,2,3]}
            />
          </div>
          <div className={styles.index_view_recommend_item}>
            <Recommend
              title='新品推荐'
              desc='NEW PRODUCTS'
              list={[1,2,3,4]}
            />
          </div>
        </div>
        <div className={styles.index_view_modular}>
          {
            [1,2,3,4,5,6,7,8].map(item=>
              <div className={styles.index_view_modular_item} key={item}>
                <Modular
                  title='办公电器'
                />
              </div>  
            )
          }
        </div>
      </main>
    </>
  )
}

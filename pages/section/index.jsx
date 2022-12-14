import { useState } from 'react';
import { withRouter } from 'next/router';
import Header from '@/components/Header';
import GoodsItem from '@/components/GoodsItem';
import Navgation from '@/components/Navgation';
import styles from '@/static/styles/index.module.less';

const Home = (props) => {
  let {
    pid
  } = props?.router?.query;
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
        </div>
        <div className={styles.index_view_list}>
          {
            [1,2,3,4,5,6,7,8,9,0].map(item=>
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
      </main>
    </>
  )
}
export default withRouter(Home);
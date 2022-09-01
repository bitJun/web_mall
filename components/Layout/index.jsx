import Router, { useRouter } from 'next/router';
import Navbar from '../Navbar'
import Footer from '../Footer';
import styles from '@/static/styles/common.module.less';

export default function Layout({ children }) {
  const router = useRouter();
  let {
    asPath
  } = router;
  const handleScroll =()=> {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.scrollTo( 0, 50 );
  }
  return (
    <>
      <Navbar />
        <main>{children}</main>
        {
          asPath !== '/login' &&
          <div className={styles.backtop}>
            <div
              className={styles.backtop_item}
              onClick={()=>{
                Router.push({
                  pathname: '/'
                })
              }}
            >
              <img
                src='/static/images/home.png'
                className={styles.backtop_item_icon}
              />
            </div>
            <div
              className={styles.backtop_item}
              onClick={()=>{
                Router.push({
                  pathname: '/cart'
                })
              }}
            >
              <img
                src='/static/images/cart.png'
                className={styles.backtop_item_icon}
              />
            </div>
            <div className={styles.backtop_item}>
              <img
                src='/static/images/kefu.png'
                className={styles.backtop_item_icon}
              />
            </div>
            <div className={styles.backtop_item}>
              <img
                src='/static/images/code.png'
                className={styles.backtop_item_icon}
              />
            </div>
            <div className={styles.backtop_item} onClick={()=>{handleScroll()}}>
              <img
                src='/static/images/backtop.png'
                className={styles.backtop_item_icon}
              />
            </div>
          </div>
        }
      <Footer />
    </>
  )
}

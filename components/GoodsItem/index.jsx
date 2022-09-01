import styles from './index.module.less';

const GoodsItem = (props) => {
  return (
    <div className={styles.item}>
      <img
        src={props?.img}
        className={styles.item_img}
      />
      <div className={styles.item_main}>
        <h3 className={styles.item_main_title}>{props?.goodsName}</h3>
        <div className={styles.item_main_price}>
          <span className={styles.item_main_price_unit}>¥</span>
          {props?.price}
        </div>
      </div>
    </div>
  )
}
export default GoodsItem;
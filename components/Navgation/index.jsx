import { useEffect, useState } from 'react';
import Router, { withRouter } from 'next/router';
import styles from './index.module.less';

const Navgation = (props) => {
  let {
    pid
  } = props?.router?.query;
  const [subMenuList, setSubMenuList] = useState([]);
  const [menus] = useState([
    {
      id: 0,
      name: '电脑/平板',
      subMenu: [
        {
          name: '电脑整机',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 1,
      name: '办公/文具',
      subMenu: [
        {
          name: '电脑整机',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 2,
      name: '生活电器',
      subMenu: [
        {
          name: '电脑整机',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 3,
      name: '手机/数码',
      subMenu: [
        {
          name: '电脑整机',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 4,
      name: '食品饮料',
      subMenu: [
        {
          name: '电脑整机',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 5,
      name: '厨卫电器',
      subMenu: [
        {
          name: '办公设备',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 6,
      name: '家居/家具',
      subMenu: [
        {
          name: '网络产品',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 7,
      name: '保健/母婴',
      subMenu: [
        {
          name: '游戏设备',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 8,
      name: '运动/户外',
      subMenu: [
        {
          name: '外设产品',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },{
      id: 9,
      name: '个护/清洁/美妆',
      subMenu: [
        {
          name: '电脑配件',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    },
    {
      id: 10,
      name: '汽车用品/工艺品',
      subMenu: [
        {
          name: '电脑整机',
          list: [
            {
              id: '0-1',
              name: '笔记本'
            },
            {
              id: '0-2',
              name: '笔记本'
            },
            {
              id: '0-3',
              name: '笔记本'
            },
            {
              id: '0-4',
              name: '笔记本'
            }
          ],
        }
      ]
    }
  ]);
  useEffect(()=>{
    console.log('subMenuList', subMenuList)
  }, [subMenuList])
  const goRouter = (id) => {
    Router.push({
      pathname: '/section',
      query: { pid: id },
    });
  }
  const showCategory = (id) => {
    Router.push({
      pathname: '/category',
      query: { name: id },
    });
  }
  const showSubMenu = (id) => {
    let subMenu = [];
    menus.forEach(item=>{
      if (item.id === id) {
        subMenu = item.subMenu;
      }
    });
    console.log('subMenu', subMenu)
    setSubMenuList(subMenu);
  }
  return (
    <div className={styles.navgation_section}>
      <div className={styles.navgation_section_nav}>
        <div className={styles.navgation_section_nav_main}>
          全部商品
          <img
            src='/static/images/more.png'
            className={styles.navgation_section_nav_main_icon}
          />
          <div className={styles.navgation_section_nav_main_menu}>
            {
              menus && menus.map(item=>
                <div
                  className={styles.navgation_section_nav_main_menu_item}
                  key={item?.id}
                  onMouseOver={()=>{showSubMenu(item?.id)}}
                >
                  {item?.name}
                </div>
              )
            }
          </div>
          <div className={styles.navgation_section_nav_main_submenu}>
            {
              subMenuList && subMenuList.map(json=>
                <div
                  className={styles.navgation_section_nav_main_submenu_item}
                  key={json?.id}
                >
                  <div className={styles.navgation_section_nav_main_submenu_item_name}>
                    {json?.name} 
                    <img
                      src='../static/images/more_icon.png'
                      className={styles.navgation_section_nav_main_submenu_item_name_icon}
                    />
                  </div>
                  <div className={styles.navgation_section_nav_main_submenu_item_list}>
                    {
                      json?.list.map(key=>
                        <span
                          className={styles.navgation_section_nav_main_submenu_item_list_single}
                          key={key?.id}
                          onClick={()=>{showCategory(key?.id)}}
                        >
                          {key?.name}
                        </span>
                      )
                    }
                  </div>
                </div>  
              )
            }
          </div>
        </div>
        <div
          className={`${styles.navgation_section_nav_item} ${Number(pid) == 1 ? `${styles.active}` : ''}`}
          onClick={()=>{goRouter(1)}}
        >
          模块一
        </div>
        <div
          className={`${styles.navgation_section_nav_item} ${Number(pid) == 2 ? `${styles.active}` : ''}`}
          onClick={()=>{goRouter(2)}}
        >
          模块二
        </div>
        <div
          className={`${styles.navgation_section_nav_item} ${Number(pid) == 3 ? `${styles.active}` : ''}`}
          onClick={()=>{goRouter(3)}}
        >
          模块三
        </div>
        <div
          className={`${styles.navgation_section_nav_item} ${Number(pid) == 4 ? `${styles.active}` : ''}`}
          onClick={()=>{goRouter(4)}}
        >
          模块四
        </div>
        <div
          className={`${styles.navgation_section_nav_item} ${Number(pid) == 5 ? `${styles.active}` : ''}`}
          onClick={()=>{goRouter(5)}}
        >
          模块五
        </div>
      </div>
    </div>
  )
}
export default withRouter(Navgation);
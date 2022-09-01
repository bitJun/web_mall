import { proxyHost } from '../scanffold/config'

export default {
  // baseURL: 'http://api.doc.zhifuzi.com/mock', // mock地址
  baseURL: proxyHost, // 测试环境
  UserCountByModuleType: '/trademark/search/statisticsSearchUserCountByModuleType',     // 查询人数
  SearchCountByModuleType: '/trademark/search/statisticsSearchCountByModuleType',        // 查询次数
  ProductCount: '/trademark/trademarkProductCount',                                     // 商标数量
  Brandcount: '/trademark/search/queryWapCollectionPageTms',                           // 商标集合页查询
  Judgestring: '/trademark/transfer/queryEnumValue',                               // 判断英文字符串是城市还是商品小项
  detail: '/trademark/search/rchaxun',                                           // 
  wxLogin: '/oauth2/wechat/authorize',                                             // 微信oauth2登录
  queryByMoblie: 'act/awardRecord',                                          //根据手机号 中奖查询 618活动 Innquire
  registration: 'act/registration',                                           // 618活动 登录                                          
  wxInitial: '/oauth2/wechat/signature',                                           // 微信sdk初始化      
  shake:'act/shake',                                                              // 618活动页 抽奖转盘
  awardShare: 'act/awardShare',                                                      // 增加允许抽奖的次数
  queryWapReport4Terminal: '/terminal/queryWapReport4Terminal',
}

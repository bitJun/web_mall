import { proxyHost } from '../scanffold/config'

export default {
    // baseURL: 'http://api.doc.zhifuzi.com/mock', // mock地址
    baseURL: proxyHost, // 测试环境                                                                    // 测试环境
    queryNewsList: '/news/list',                                                                                //新闻列表
    queryNewsDetail: '/news/detail',                                                                            //新闻详情
    queryAdvert: '/common/advert',                                                                              //广告
    queryTmGoodsByLevelDesc: '/trademark/transfer/queryTmGoodsByLevelDesc',                                     //商品推荐
    queryDemandList: '/demand/demandList',                                                                      //首页最新求购信息推荐
    queryBargainList: '/trademark/transfer/bargainList',                                                        //首页特价标推荐列表
    queryrandomThemeGoodsList: '/trademark/transfer/randomThemeGoodsList',                                      //首页每日优选
    postWebsiteClue: '/common/addWebsiteClue',                                                                  //商标集合页
    queryByCity: '/trademark/transfer/queryByCity',                                                             //城市集合页查询商标
    queryEnumValue: '/trademark/transfer/queryEnumValue',                                                       //查询城市，类别，汉字，商品对应的枚举值
    queryByIntcls: '/trademark/transfer/queryByIntcls',                                                         //类别集合页查询商标
    querystatisticsSearchUserCountByModuleType: '/trademark/search/statisticsSearchUserCountByModuleType',      //根据模块查询查询用户数量
    querystatisticsSearchCountByModuleType: '/trademark/search/statisticsSearchCountByModuleType',              //根据模块查询商标查询数量
    queryEvaluatesByProductId: '/business/queryEvaluatesByProductId',                                           //查询基础服务评价列表
    queryBusinessDetail: '/business/queryBusinessDetail',                                                       //基础业务详情
    queryRecommendList: '/issue/recommendList',                                                                 //常见问题推荐列表
    queryIssueList: '/issue/list',                                                                              //首页常见问题推荐
    queryIssueDetail: '/issue/detail',                                                                          //常见问题详情
    queryselfOwnerTms: '/trademark/transfer/selfOwnerTms',                                                      //集合页自有商标推荐
    querysimilarGoods: '/trademark/transfer/similarGoods',                                                      //商标转让详情页类似商品推荐
    /* 二期接口 */
    queryAllCategory: '/helpCenter/showAllCategory',                                                            //获取全部帮助菜单
    sendMsgCode: '/sms/sendMsgCode',                                                                            //发送验证码
    checkMsgCode: '/sms/checkMsgCode',                                                                          //验证码校验接口
    modifyMobile: '/user/modifyMobile',                                                                         //修改手机号
    login: '/user/login',                                                                                       //登录
    sendCodeWithRegister: '/sms/sendCodeWithRegister',                                                          //快速登录
    queryUserDetail: '/user/queryUserDetail',                                                                   //获取用户详情
    queryUserWallet: '/user/queryUserWallet',                                                                   //查询钱包信息
    modifyPassword: '/user/modifyPassword',                                                                     //记住密码修改密码
    reSetPassword: '/user/reSetPassword',                                                                       //设置密码
    queryAllBankcardList: '/user/queryAllBankcardList',                                                         //查询银行卡信息
    addCart: '/cart/addItem',                                                                                   //购物车-添加
    buyNow: '/trademark/transfer/buyNow',                                                                       //商标转让详情立即购买跳转
    queryCouponListByProduct: '/coupon/queryCouponListByProduct',                                               //确认订单页面优惠券查询
    createTransferOrder: '/order/createTransferOrder',                                                          //创建订单-转让订单
    getOrderDetail: '/order/userTransferOrderDetail',                                                           //查询用户转让订单详情
    getUserTransferOrderList: '/order/userTransferOrderList',                                                   //userTransferOrderList
    queryservicesOrderList: '/order/servicesOrderList',                                                         //查询用户服务订单列表
    addComplaint: '/common/addComplaint',                                                                       //添加建议投诉
    addBankcard: '/user/addBankcard',                                                                           //添加银行卡
    querycartList: '/cart/showItem',                                                                            //购物车-查看
    delCart: '/cart/deleteItem',                                                                                //购物车-删除
    createOrder: '/order/createOrder',                                                                          //创建订单-基础服务订单
    serviceOrderDetail: '/order/serviceOrderDetail',                                                            //查询用户服务订单详情
    deleteOrder: '/order/deleteOrder',                                                                          //删除订单
    querySelfRegisterApplicantsByUserId: '/user/querySelfRegisterApplicantsByUserId',                           //根据用户id查询申请名义
    queryGroupsByIntcls: '/trademark/category/queryGroupsByIntcls',                                             //根据类别查询群组
    logout: '/user/logout',                                                                                     //退出登录
    cancelTransferOrder: '/order/cancelTransferOrder',                                                          //转让订单取消
    modifySelfServiceOrder: '/order/modifySelfServiceOrder',                                                    //修改订单-用户修改自助注册订单
    servicesOrderItemExtendUpdate: '/order/servicesOrderItemExtendUpdate',
    saveApplicant: '/selfRegisterApplicant/saveApplicant',
    queryByParams: '/trademark/category/queryByParams',
    queryCoupon4Order: '/coupon/queryCoupon4Order',
    removeById: '/order/servicesOrderGroupDetail/removeById',
    batchSave: '/order/servicesOrderGroupDetail/batchSave',
    cancelServiceOrder: '/order/cancelServiceOrder'
}

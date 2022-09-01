import { proxyHost } from '../scanffold/config'
export default {
  // baseURL: 'http://api.doc.zhifuzi.com/mock', // mock地址
  baseURL: proxyHost, // 测试环境

  queryBySize: '/trademark/trademarkCategoryRecord/queryBySize', //尼斯分类更新记录
  queryIntcls: '/trademark/category/queryIntcls', //查询45个类别
  queryByIntcls: '/trademark/category/queryByIntcls', //尼斯分类类目明细
  queryGroupNoDetail: '/trademark/category/queryGroupNoDetail', //尼斯分类类目页 群组明细
  queryByParams: '/trademark/category/queryByParams', //根据参数查询商品小项
  queryListByParams: '/trademark/transfer/queryListByParams', //商标转让列表
  queryEnumValue: '/trademark/transfer/queryEnumValue',
  queryByCity: '/trademark/transfer/queryByCity',
  queryByGroupNo: '/trademark/transfer/queryByGroupNo',
  queryByChineseCharacters: '/trademark/transfer/queryByChineseCharacters',
  queryByIntcl: '/trademark/transfer/queryByIntcls',
  queryByTmDetail: '/trademark/transfer/queryByTmDetail',
  queryGoodsdetail: '/trademark/transfer/queryGoodsdetail', //商标转让详情
  demandList: '/demand/demandList', //需求列表
  demandDetail: '/demand/demandDetail', //需求详情
  publishDemand: '/demand/publishDemand', //发布需求
  queryDetailsGrouped: '/trademark/category/queryDetailsGrouped', //根据商品名称或者编号查询（查询已经分组的商品小项）
  queryValueInformation: '/trademark/transfer/valueInformation', //商标价值信息
  recommendProduct: '/demand/recommendProduct', //为求购需求推荐商品
  searchWord: '/common/searchWord',
  similarGoods: '/trademark/transfer/similarGoods',

  addItem: '/cart/addItem', //购物车-添加
  buyNow: '/trademark/transfer/buyNow', //商标转让详情立即购买跳转

  userMonitorIndex: '/user/userMonitorIndex', //监测首页-数据统计
  companyInfo: '/selfRegisterApplicant/companyInfo', //添加监测--搜索企业
  addUserTrademarkManagers: '/user/addUserTrademarkManagers', //添加监测--添加
  deleteTrademarkManager: '/user/deleteTrademarkManager', //删除监测的商标
  userMonitorResult: '/user/userMonitorResult', //监测结果
  userMonitorTrademark: '/user/userMonitorTrademark', //企业管理-用户监测的企业
  deleteMonitorTrademark: '/user/deleteMonitorTrademark', //企业管理-取消企业监测

  detail: '/trademark/search/detail', //商标详情
  queryByUser: '/message/queryByUser', //获取用户消息列表
  readMyMsg: '/message/readMyMsg', //读取用户消息

  queryPersonalAuditList: '/user/queryPersonalAuditList', //查询个人认证列表
  queryCompanyAuditList: '/user/queryCompanyAuditList', //查询公司认证列表
  createUserPersonalAudit: '/user/createUserPersonalAudit', //添加个人实名认证
  createUserCompanyAudit: '/user/createUserCompanyAudit', //添加公司实名认证
  queryPersonalAuditDetailById: '/user/queryPersonalAuditDetailById', //查询公司个人认证详情
  queryCompanyAuditDetailById: '/user/queryCompanyAuditDetailById', //查询公司认证详情
  unbindPersonAudit: '/user/unbindPersonAudit', //解除绑定个人实名认证
  unbindCompanyAudit: '/user/unbindCompanyAudit', //解除绑定公司实名认证
  deletePersonAudit: '/user/deletePersonAudit', //删除个人实名认证
  deleteCompanyAudit: '/user/deleteCompanyAudit', //删除企业实名认证
  recommitPersonAudit: '/user/recommitPersonAudit', //重新提交个人实名认证
  recommitCompanyAudit: '/user/recommitCompanyAudit', //重新提交实企业名认证
  updatePersonalAudit: '/user/updatePersonalAudit', //重新提交个人实名认证
  updateCompanyAudit: '/user/updateCompanyAudit', //重新提交实企业名认证
  setPersonDefault: '/user/setPersonDefault', //个人实名认证设置默认
  setCompanyDefault: '/user/setCompanyDefault', //企业实名认证设置默认
  submitServiceOrder: '/business/submitServiceOrder', //监测异常续费跳转页面

  queryCouponList: '/coupon/queryCouponList', //查询用户的优惠券信息
  queryCouponDetailById: '/coupon/queryCouponDetail', //优惠券详情页
  saveSubscribe: '/user/saveSubscribe', //添加订阅信息

  partnerCount: '/user/partner/partnerCount', //我是合伙人
  queryDistributorChannel: '/user/channel/queryDistributor', //我的渠道商
  queryDistributor: '/user/queryDistributor', //我的分销商
  queryChannelOrderByPage: '/order/queryChannelOrderByPage', //渠道合作情况订单信息
  queryDistributionOrderByPage: '/order/queryDistributionOrderByPage', //分销商以及二级分销商订单
  queryMyDistribution: '/user/queryMyDistribution', //我的分销商情况

  payWapOrderFrontMoney: '/order/payWapOrderFrontMoney', //商标转让订单-wap支付定金
  payWapOrderTailMoney: '/order/payWapOrderTailMoney', //商标转让订单-wap支付尾款
  payWapServicesOrder: '/order/payWapServicesOrder', //服务订单支付-wap
  queryPayState: '/orderPay/queryPayState', //查询支付状态

  userTransferOrderDetail: '/order/userTransferOrderDetail', //查询用户转让订单详情
  serviceOrderDetail: '/order/serviceOrderDetail', //查询用户服务订单详情

  lookSignSeal: '/eSign/lookSignSeal', //签字盖章查看
  confirmSignAndSeal: '/eSign/confirmSignAndSeal', //签字盖章填充
  signAndSeal: '/eSign/signAndSeal', //签字盖章确认

  upload: '/file/upload' //文件上传
};

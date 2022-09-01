import axios from './axios';
import api from './constants';

/**
 * 根据商品名称或者编号查询（查询已经分组的商品小项）
 * @param {*} searchContext
 */
const queryDetailsGrouped = searchContext =>
  axios.get(api.queryDetailsGrouped, {
    params: {
      searchContext: searchContext
    }
  });

/**
 * 尼斯分类更新记录
 * @param {*} size
 */
const queryBySize = (size = 6) =>
  axios.get(api.queryBySize, {
    params: {
      size: size
    }
  });

/**
 * 查询45个类别
 */
const queryIntcls = () => axios.get(api.queryIntcls);

/**
 * 尼斯分类类目明细
 * @param {*} intcls
 */
const queryByIntcls = intcls =>
  axios.get(api.queryByIntcls, {
    params: {
      intcls: intcls
    }
  });

/**
 * 尼斯分类类目页 群组明细
 * @param {*} groupNo
 */
const queryGroupNoDetail = groupNo =>
  axios.get(api.queryGroupNoDetail, {
    params: {
      groupNo: groupNo
    }
  });

/**
 * 根据参数查询商品小项
 * @param {*} groupNo
 * @param {*} detailName
 */
const queryByParams = (groupNo, detailName) =>
  axios.get(api.queryByParams, {
    params: {
      groupNo: groupNo,
      detailName: detailName
    }
  });

/**
 * 商标转让列表
 * @param {*} data
 */
// const queryListByParams = data => axios.get(api.queryListByParams, { params: data })
const queryListByParams = data => axios.post(api.queryListByParams, data);

/**
 * @param {*} value
 */
const queryEnumValue = value =>
  axios.get(api.queryEnumValue, { params: { value: value } });

/**
 * @param {*} city
 * @param {*} size
 */
const queryByCity = (city, size = 30) =>
  axios.get(api.queryByCity, { params: { city: city, size: size } });

/**
 * @param {*} groupNo
 * @param {*} size
 */
const queryByGroupNo = (groupNo, size = 30) =>
  axios.get(api.queryByGroupNo, { params: { groupNo: groupNo, size: size } });

/**
 * @param {*} characters
 * @param {*} size
 */
const queryByChineseCharacters = (characters, size = 30) =>
  axios.get(api.queryByChineseCharacters, {
    params: { characters: characters, size: size }
  });

/**
 * @param {*} intcls
 * @param {*} size
 */
const queryByIntcl = (intcls, size = 30) =>
  axios.get(api.queryByIntcl, {
    params: { intcls: intcls, size: size }
  });

/**
 * @param {*} tmDetail
 * @param {*} size
 */
const queryByTmDetail = (tmDetail, size = 30) =>
  axios.get(api.queryByTmDetail, {
    params: { tmDetail: tmDetail, size: size }
  });

/**
 * 商标转让详情
 * @param {*} id
 */
const queryGoodsdetail = id =>
  axios.get(api.queryGoodsdetail, {
    params: {
      id: id
    }
  });

/**
 * 商标价值信息
 * @param {*} id
 */
const queryValueInformation = productId =>
  axios.get(api.queryValueInformation, {
    params: {
      productId: productId
    }
  });

/**
 * 需求列表
 * @param {*} current 当前页数
 * @param {*} sort 排序
 * @param {*} searchContent 关键词查询
 * @param {*} type 关键词类型
 */
const demandList = (current, sort, searchContent, type) =>
  axios.get(api.demandList, {
    params: {
      size: 20,
      current: current,
      sort: sort,
      searchContent: searchContent,
      type: type
    }
  });

/**
 * 需求详情
 * @param {*} id
 */
const demandDetail = id =>
  axios.get(api.demandDetail, {
    params: {
      id: id
    }
  });

/**
 * 为求购需求推荐商品
 * @param {*} id
 * @param {*} regNos
 */
const recommendProduct = (id, regNos) =>
  axios.get(api.recommendProduct, {
    params: {
      regNos: regNos,
      id: id
    }
  });

const similarGoods = (goodsCount, intcls) =>
  axios.get(api.similarGoods, {
    params: {
      goodsCount: goodsCount,
      intcls: intcls
    }
  });

const searchWord = (type, plate) =>
  axios.get(api.searchWord, {
    params: {
      type: type,
      plate: plate
    }
  });

/**
 * 发布需求
 * @param {*} description 需求描述
 * @param {*} mobile 联系方式
 * @param {*} validityDate 有效期
 * @param {*} linkman 联系人
 */
const publishDemand = (description, mobile, validityDate, linkman) =>
  // axios.post(api.publishDemand, {
  //   description: description,
  //   mobile: mobile,
  //   validityDate: validityDate,
  //   linkman: linkman
  // })
  axios({
    url: api.publishDemand,
    method: 'post',
    data: {
      description: description,
      mobile: mobile,
      validityDate: validityDate,
      linkman: linkman
    },
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 购物车-添加
 * @param {*} productId
 * @param {*} productCount
 */
const addItem = (productId, productCount) =>
  axios.post(api.addItem, {
    productId,
    productCount
  });

/**
 * 商标转让详情立即购买跳转
 * @param {*} id
 */
const buyNow = id =>
  axios.get(api.buyNow, {
    params: {
      id
    }
  });

/**
 * 监测首页-数据统计
 */
const userMonitorIndex = () => axios.get(api.userMonitorIndex);

/**
 * 添加监测--搜索企业
 * @param {*} name
 */
const companyInfo = name =>
  axios.get(api.companyInfo, {
    params: {
      name: name
    }
  });

/**
 * 添加监测--添加
 * @param {*} data
 *
 */
const addUserTrademarkManagers = data =>
  axios({
    url: api.addUserTrademarkManagers,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 删除监测的商标
 * @param {*} id
 */
const deleteTrademarkManager = id =>
  axios.get(api.deleteTrademarkManager, {
    params: {
      id
    }
  });

/**
 * 监测结果
 * @param {*} params
 */
const userMonitorResult = params =>
  axios.get(api.userMonitorResult, {
    params
  });

/**
 * 企业管理-用户监测的企业
 * @param {*} tmApplicant
 * @param {*} current
 * @param {*} size
 */
const userMonitorTrademark = (tmApplicant, current, size = 10) =>
  axios.get(api.userMonitorTrademark, {
    params: {
      tmApplicant,
      current,
      size
    }
  });

/**
 * 企业管理-取消企业监测
 * @param {*} ids
 */
const deleteMonitorTrademark = ids =>
  axios.get(api.deleteMonitorTrademark, {
    params: {
      ids
    }
  });

/**
 * 商标详情
 * @param {*} regNo
 * @param {*} intcls
 */
const detail = (regNo, intcls) =>
  axios.get(api.detail, {
    params: {
      regNo,
      intcls
    }
  });

/**
 * 获取用户消息列表
 * @param {*} current
 * @param {*} size
 */
const queryByUser = (current, size = 10) =>
  axios.get(api.queryByUser, {
    params: {
      current,
      size
    }
  });

/**
 * 读取用户消息
 * @param {*} id
 */
const readMyMsg = id =>
  axios.get(api.readMyMsg, {
    params: {
      id
    }
  });

/**
 * 查询个人认证列表
 */
const queryPersonalAuditList = (current, size = 5) =>
  axios.get(api.queryPersonalAuditList, {
    params: {
      current,
      size
    }
  });

/**
 * 查询公司认证列表
 */
const queryCompanyAuditList = (current, size = 5) =>
  axios.get(api.queryCompanyAuditList, {
    params: {
      current,
      size
    }
  });

/**
 * 添加个人实名认证
 */
const createUserPersonalAudit = data =>
  axios({
    url: api.createUserPersonalAudit,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 添加公司实名认证
 */
const createUserCompanyAudit = data =>
  axios({
    url: api.createUserCompanyAudit,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 查询个人认证详情
 * @param {*} auditId
 */
const queryPersonalAuditDetailById = auditId =>
  axios.get(api.queryPersonalAuditDetailById, {
    params: {
      auditId
    }
  });
/**
 * 查询公司认证详情
 * @param {*} auditId
 */
const queryCompanyAuditDetailById = auditId =>
  axios.get(api.queryCompanyAuditDetailById, {
    params: {
      auditId
    }
  });

/**
 * 解除绑定个人实名认证
 * @param {*} auditId
 */
const unbindPersonAudit = auditId =>
  axios.get(api.unbindPersonAudit, {
    params: {
      auditId
    }
  });

/**
 * 解除绑定公司实名认证
 * @param {*} auditId
 */
const unbindCompanyAudit = auditId =>
  axios.get(api.unbindCompanyAudit, {
    params: {
      auditId
    }
  });

/**
 * 删除个人实名认证
 * @param {*} auditId
 */
const deletePersonAudit = auditId =>
  axios.get(api.deletePersonAudit, {
    params: {
      auditId
    }
  });

/**
 * 删除企业实名认证
 * @param {*} auditId
 */
const deleteCompanyAudit = auditId =>
  axios.get(api.deleteCompanyAudit, {
    params: {
      auditId
    }
  });

/**
 * 重新提个人实名认证
 * @param {*} auditId
 */
const recommitPersonAudit = (data, auditId) =>
  axios({
    url: `${api.recommitPersonAudit}?auditId=${auditId}`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 重新提交企业实名认证
 * @param {*} auditId
 */
const recommitCompanyAudit = (data, auditId) =>
  axios({
    url: `${api.recommitCompanyAudit}?auditId=${auditId}`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 重新提个人实名认证
 * @param {*} data
 */
const updatePersonalAudit = data =>
  axios({
    url: api.updatePersonalAudit,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 重新提交企业实名认证
 * @param {*} data
 */
const updateCompanyAudit = data =>
  axios({
    url: api.updateCompanyAudit,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 个人实名认证设置默认
 * @param {*} id
 */
const setPersonDefault = id =>
  axios.get(api.setPersonDefault, {
    params: {
      id
    }
  });

/**
 * 企业实名认证设置默认
 * @param {*} id
 */
const setCompanyDefault = id =>
  axios.get(api.setCompanyDefault, {
    params: {
      id
    }
  });

/**
 * 监测异常续费跳转页面
 * @param {*} uri
 * @param {*} skuId
 */
const submitServiceOrder = (uri, skuId) =>
  axios.get(api.submitServiceOrder, {
    params: {
      uri,
      skuId
    }
  });

/**
 * 监测异常续费跳转页面
 * @param {*} uri
 * @param {*} skuId
 */
const submitbussinessServiceOrder = params =>
  axios.get(api.submitServiceOrder, {
    params
  });

/**
 * 查询用户的优惠券信息
 */
const queryCouponList = params =>
  axios.get(api.queryCouponList, {
    params
  });

/**
 * 优惠券详情页
 * @param {*} couponId
 */
const queryCouponDetailById = couponId =>
  axios.get(api.queryCouponDetailById, {
    params: {
      id: couponId
    }
  });
// const queryCouponDetailById = data =>
//   axios({
//     url: api.queryCouponDetailById,
//     method: 'post',
//     data,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     transformRequest: [
//       function(data) {
//         return JSON.stringify(data);
//       }
//     ]
//   });

/**
 * 添加订阅信息
 */
const saveSubscribe = data =>
  axios({
    url: api.saveSubscribe,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 我是合伙人
 */
const partnerCount = () => axios.get(api.partnerCount);

/**
 * 我的渠道商
 */
const queryDistributorChannel = () => axios.get(api.queryDistributorChannel);

/**
 * 我的分销商
 */
const queryDistributor = () => axios.get(api.queryDistributor);

/**
 * 渠道合作情况订单信息
 * @param {*} current
 * @param {*} size
 */
const queryChannelOrderByPage = (current, size = 5) =>
  axios.get(api.queryChannelOrderByPage, {
    params: {
      current,
      size
    }
  });

/**
 * 分销商以及二级分销商订单
 * @param {*} current
 * @param {*} size
 */
const queryDistributionOrderByPage = (current, size = 5) =>
  axios.get(api.queryDistributionOrderByPage, {
    params: {
      current,
      size
    }
  });

/**
 * 我的分销商情况
 */
const queryMyDistribution = () => axios.get(api.queryMyDistribution);

/**
 * 商标转让订单-wap支付定金
 */
const payWapOrderFrontMoney = data =>
  axios({
    url: api.payWapOrderFrontMoney,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 商标转让订单-wap支付尾款
 */
const payWapOrderTailMoney = data =>
  axios({
    url: api.payWapOrderTailMoney,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 服务订单支付-wap
 */
const payWapServicesOrder = data =>
  axios({
    url: api.payWapServicesOrder,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 查询支付状态
 */
const queryPayState = payNo =>
  axios.get(api.queryPayState, {
    params: {
      payNo
    }
  });

/**
 * 查询用户转让订单详情
 * @param {*} orderId
 */
const userTransferOrderDetail = orderId =>
  axios.get(api.userTransferOrderDetail, {
    params: {
      orderId
    }
  });

/**
 * 查询用户服务订单详情
 * @param {*} orderId
 */
const serviceOrderDetail = orderId =>
  axios.get(api.serviceOrderDetail, {
    params: {
      orderId
    }
  });

/**
 * 签字盖章查看
 * @param {*} id
 */
const lookSignSeal = id =>
  axios.get(api.lookSignSeal, {
    params: {
      id
    }
  });

/**
 * 签字盖章填充
 * @param {*} id
 */
const confirmSignAndSeal = id =>
  axios.get(api.confirmSignAndSeal, {
    params: {
      id
    }
  });

/**
 * 签字盖章确认
 */
const signAndSeal = data =>
  axios({
    url: api.signAndSeal,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data);
      }
    ]
  });

/**
 * 文件上传
 */
const upload = data =>
  axios({
    url: api.upload,
    method: 'post',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
    transformRequest: [
      function(data) {
        return data;
      }
    ]
  });

export {
  queryDetailsGrouped,
  queryBySize,
  queryIntcls,
  queryByIntcls,
  queryGroupNoDetail,
  queryByParams,
  queryListByParams,
  queryEnumValue,
  queryByCity,
  queryByGroupNo,
  queryByChineseCharacters,
  queryByIntcl,
  queryByTmDetail,
  queryGoodsdetail,
  demandList,
  demandDetail,
  recommendProduct,
  publishDemand,
  queryValueInformation,
  searchWord,
  similarGoods,
  addItem,
  buyNow,
  userMonitorIndex,
  companyInfo,
  addUserTrademarkManagers,
  deleteTrademarkManager,
  userMonitorResult,
  userMonitorTrademark,
  deleteMonitorTrademark,
  detail,
  queryByUser,
  readMyMsg,
  queryPersonalAuditList,
  queryCompanyAuditList,
  createUserPersonalAudit,
  createUserCompanyAudit,
  queryPersonalAuditDetailById,
  queryCompanyAuditDetailById,
  unbindPersonAudit,
  unbindCompanyAudit,
  deletePersonAudit,
  deleteCompanyAudit,
  recommitPersonAudit,
  recommitCompanyAudit,
  updatePersonalAudit,
  updateCompanyAudit,
  setPersonDefault,
  setCompanyDefault,
  submitServiceOrder,
  queryCouponList,
  queryCouponDetailById,
  saveSubscribe,
  partnerCount,
  queryDistributorChannel,
  queryDistributor,
  queryChannelOrderByPage,
  queryDistributionOrderByPage,
  queryMyDistribution,
  payWapOrderFrontMoney,
  payWapOrderTailMoney,
  payWapServicesOrder,
  queryPayState,
  userTransferOrderDetail,
  serviceOrderDetail,
  lookSignSeal,
  confirmSignAndSeal,
  signAndSeal,
  upload,
  submitbussinessServiceOrder
};

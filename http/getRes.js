import axios from './axios'
import api from './apikey'

/**
 * 新闻列表
 * @param {*} size,current
 */
const getNewsList = (params) =>
	axios.get(api.queryNewsList, {
		params: params
	})

/**
 * 新闻详情
 * @param {*} id
 */
const getNewSDetail = (id) =>
	axios.get(api.queryNewsDetail,  {
		params: {
		  	id: id
		}
	})

/**
 * 商标转让详情页类似商品推荐
 * @param {*}
 */
const querysimilarGoods = (params) =>
	axios.get(api.queryNewsDetail,  {
		params: params
	})
/**
 * 常见问题列表
 * @param {*} size,current
 */
const getIssueList = (params) =>
	axios.get(api.queryIssueList, {
		params: params
	})


/**
 * 新闻详情
 * @param {*} id
 */
const getIssueDetail = (id) =>
	axios.get(api.queryIssueDetail,  {
		params: {
		  	id: id
		}
	})

/**
 * 广告查询
 * @param {*} positionIds
 */
const getAdvert = positionIds =>
	axios.get(api.queryAdvert, {
		params: {
			positionIds: positionIds
		}
	})

/**
 * 商品推荐
 * @param {*} goodsCount intcls
 */
const getTmGoodsByLevelDesc = (goodsCount, intcls = '') =>
	axios.get(api.queryTmGoodsByLevelDesc, {
		params: {
			goodsCount: goodsCount,
			intcls: intcls
		}
	})

/**
 * 首页最新求购信息推荐
 * @param {*} goodsCount  intcls
 */
const getDemandList = (goodsCount, intcls='') =>
	axios.get(api.queryDemandList, {
		params: {
			goodsCount: goodsCount,
			intcls: intcls
		}
	})

/**
 * 首页特价标推荐列表
 * @param {*} size nowTime
 */
const getBargainList = (size, nowTime = '') =>
	axios.get(api.queryBargainList,{
		params: {
			size: size,
			nowTime: nowTime
		}
	})

/**
 * 首页每日优选
 * @param {*} size nowTime
 */
const getrandomThemeGoodsList = size =>
	axios.get(api.queryrandomThemeGoodsList,{
		params: {
			size: size
		}
	})

/**
 * 商标集合页
 *
*/
const getWebsiteClue = (type,descrition,source,linkman,mobile,status,url,remarks,accessoryFileId,validDate) =>
	axios.post(api.queryWebsiteClue,{
		params: {
			type: type,
			descrition: descrition,
			source: source,
			linkman: linkman,
			mobile: mobile,
			status: status,
			url: url,
			remarks: remarks,
			accessoryFileId: accessoryFileId,
			validDate: validDate
		}
	})


/**
 * 城市集合页查询商标
 *
*/
const getByCity = (params) =>
	axios.get(api.queryByCity,{
		params: params
	})


/**
 * 查询城市，类别，汉字，商品对应的枚举值
 *
*/
const getEnumValue = value =>
	axios.get(api.queryEnumValue,{
		params: {
			value: value,
		}
	})

/**
 * 类别集合页查询商标
 *
*/
const getByIntcls = (intcls, size) =>
	axios.get(api.queryByIntcls,{
		params: {
			intcls: intcls,
			size: size
		}
	})

//根据模块查询查询用户数量
const getUserCountByModuleType = key =>
	axios.get(api.querystatisticsSearchUserCountByModuleType,{
		params: {
			moduleType: key
		}
	})

//根据模块查询商标查询数量
const getSearchCountByModuleType = key =>
	axios.get(api.querystatisticsSearchCountByModuleType,{
		params: {
			moduleType: key
		}
	})

//基础业务详情
const getBusinessDetail = uri =>
	axios.get(api.queryBusinessDetail,{
		params: {
			uri: uri			//基础业务商品uri
		}
	})

//查询基础服务评价列表
const getEvaluatesByProductId = (params) =>
	axios.get(api.queryEvaluatesByProductId,{
		params: params
	})

//常见问题推荐列表
const getRecommendList = (params) =>
	axios.get(api.queryRecommendList,{
		params: params
	})

const getSelfOwnerTms = (params) =>
	axios.get(api.queryselfOwnerTms,{
		params: params
	})

/* 二期接口 */
//获取全部帮助菜单
const getAllCategory = (params) =>
	axios.get(api.queryAllCategory,{
		params: params
	})

/*
	发送验证码
*/
const getMsgCode = (params) =>
	axios.get(api.sendMsgCode,{
		params: params
	})
/*
	验证码校验接口
*/
const getcheckMsgCode = (params) =>
	axios.get(api.checkMsgCode,{
		params: params
	})
/*
	修改手机号
*/
const postmodifyMobile = (data) =>
	axios.post(api.modifyMobile, data)

/**
 * 登录
 *
*/
const postLogin = data => axios.post(api.login, data);

/**
 * 快速登录
 *
*/
const postSendCodeWithRegister = data => axios.post(api.sendCodeWithRegister, data);

/*
	获取用户详情
*/
const getUserDetail = () =>
	axios.post(api.queryUserDetail,{
		params: {}
	})
/**
 *
 * 查询钱包信息
 *
**/
const getUserWallet = (params) =>
	axios.get(api.queryUserWallet,{
		params: params
	})

/**
 * 记住密码修改密码
 *
*/
const modifyPassword = data => axios.post(api.modifyPassword, data);

/**
 * 记住密码修改密码
 *
*/
const reSetPassword = data => axios.post(api.reSetPassword, data);

/**
 *
 * 查询银行卡信息
 *
**/
const getAllBankcardList = (params) =>
	axios.get(api.queryAllBankcardList,{
		params: params
	})

const postWebsiteClue = data =>
	axios({
		url: api.postWebsiteClue,
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
 * 购物车-添加
 * {
 * productId: 商品id
 * productCount: 商品数量
 * userId: 用户id
 * }
 */
const postAddCart = data =>
	axios.post(api.addCart, data);

/**
 * 商标转让详情立即购买跳转
 * {
 * id: 商标转让商品id
 * }
 */
const getBuyNow = (params) =>
	axios.get(api.buyNow,{
		params: params
	})

/**
 * 查询用户转让订单详情
 */
const getOrderDetail = (params) =>
	axios.get(api.getOrderDetail,{
		params: params
	})

/**
 * 查询用户转让订单详情
 */
const getCouponListByProduct = (params) =>
	axios.get(api.queryCouponListByProduct,{
		params: params
	})

/**
 * 创建订单-转让订单
*/
const createTransferOrder = data =>
	axios({
		url: api.createTransferOrder,
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
 * 查询用户服务订单列表
*/
const getservicesOrderList = (params) =>
	axios.get(api.queryservicesOrderList,{
		params: params
	})

const getUserTransferOrderList = (params) =>
	axios.get(api.getUserTransferOrderList,{
		params: params
	})

const postaddComplaint = data =>
	axios({
		url: api.addComplaint,
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

const postaddBankcard = data =>
	axios.post(api.addBankcard, data);

const createOrder = data =>
	axios({
		url: api.createOrder,
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
 * 购物车-查看
*/
const getcartList = (params) =>
	axios.get(api.querycartList,{
		params: params
	})

/**
 * 购物车-删除
*/
const postdelCart = data =>
	axios.post(api.delCart, data);

const getserviceOrderDetail = (params) =>
	axios.get(api.serviceOrderDetail, {
		params: params
	});

const deleteOrderItem = (params) =>
	axios.get(api.deleteOrder, {
		params: params
	})

const querySelfRegisterApplicantsByUserId = (params) =>
	axios.get(api.querySelfRegisterApplicantsByUserId, {
		params: params
	})

const queryGroupsByIntcls = (params) =>
	axios.get(api.queryGroupsByIntcls, {
		params: params
	})

const postlogout = data =>
	axios.post(api.logout, data);

const cancelTransferOrder = (params) =>
	axios.get(api.cancelTransferOrder, {
		params: params
	})

const cancelServiceOrder = (params) =>
	axios.get(api.cancelServiceOrder, {
		params: params
	})

const queryByParams = (params) =>
	axios.get(api.queryByParams, {
		params: params
	})

const queryCoupon4Order = (params) =>
	axios.get(api.queryCoupon4Order, {
		params: params
	})
	
const removeById = (params) =>
	axios.get(api.removeById, {
		params: params
	})
const modifySelfServiceOrder = data =>
	axios.post(api.modifySelfServiceOrder, data);
	
const servicesOrderItemExtendUpdate = data =>
	axios({
		url: api.servicesOrderItemExtendUpdate,
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

const batchSave = data =>
	axios({
		url: api.batchSave,
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

const saveApplicant = data =>
	axios({
		url: api.saveApplicant,
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
	
export {
	getNewsList,
	getNewSDetail,
	getIssueList,
	getIssueDetail,
	getAdvert,
	getTmGoodsByLevelDesc,
	getDemandList,
	getBargainList,
	getrandomThemeGoodsList,
	getWebsiteClue,
	getByCity,
	getEnumValue,
	getByIntcls,
	getBusinessDetail,
	getUserCountByModuleType,
	getSearchCountByModuleType,
	getEvaluatesByProductId,
	getRecommendList,
	postWebsiteClue,
	getSelfOwnerTms,
	/* 二期接口 */
	getAllCategory,
	getMsgCode,
	getcheckMsgCode,
	postmodifyMobile,
	postLogin,
	postSendCodeWithRegister,
	getUserDetail,
	getUserWallet,
	modifyPassword,
	reSetPassword,
	getAllBankcardList,
	postAddCart,
	getBuyNow,
	getOrderDetail,
	getCouponListByProduct,
	createTransferOrder,
	getservicesOrderList,
	getUserTransferOrderList,
	postaddComplaint,
	postaddBankcard,
	getcartList,
	postdelCart,
	createOrder,
	getserviceOrderDetail,
	deleteOrderItem,
	querySelfRegisterApplicantsByUserId,
	queryGroupsByIntcls,
	postlogout,
	querysimilarGoods,
	cancelTransferOrder,
	modifySelfServiceOrder,
	servicesOrderItemExtendUpdate,
	saveApplicant,
	queryByParams,
	queryCoupon4Order,
	removeById,
	batchSave,
	cancelServiceOrder
}

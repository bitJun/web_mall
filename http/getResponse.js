import axios from './axios'
import api from './apiObject'

/**
 * 查询人数
 * @param {*} size,current
 */
const getUserCount = (params) =>
	axios.get(api.UserCountByModuleType, {
		params: {
      moduleType: 'search'
    }
	})
/**
 * 查询次数
 * @param {*} size,current
 */
const getSearchCount = (params) =>
	axios.get(api.SearchCountByModuleType, {
		params: {
      moduleType: 'search'
    }
  })
  /**
 * 查询次数
 * @param {*} size,current
 */
const getProductCount = (params) =>
  axios.get(api.ProductCount, {
    params: {
      moduleType: 'search'
    }
})

 /**
 * 查询报告
 * @param {*} size,current
 */
const getReport = (url,params) =>
axios({
  url: url,
  method: 'post',
  data: params,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    function(data) {
      return JSON.stringify(data)
    }
  ]
})

 /**
 * 查询城市集合页的数据
 */
const getBrandcount = (params) =>
axios({
  url: api.Brandcount,
  method: 'post',
  data: params,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [

    function(data) {
      return JSON.stringify(data)
    }
  ]
})

/**
 * 判断英文字符串是城市还是商品小项
 */
const getJudgestring = (string) =>
  axios.get(api.Judgestring, {
    params: {
      value: string,
    }
})

/**
 * 判断英文字符串是城市还是商品小项
 */
const getDetail = (params) =>
  axios.get(api.detail, {
    params: {
      regNo: params.regNo,
    }
})

/**
 *  微信登录
 */
const wxLogin = (params) =>
  axios.get(api.wxLogin, {
    params: {
      state:  encodeURIComponent(params.state),
    }
})

/**
 * 微信sdk初始化
 *
 */
const wxInitial = (params) => 
axios.get(api.wxInitial, {
  params: {
    state:  encodeURIComponent(params.state),
  }
})

const queryByMoblie = (params) =>
  axios.get(api.queryByMoblie, {
    params: {
      mobile: params.mobile
    }
})

const registration = (params) =>
  axios.get(api.registration, {
    params
})
const shake = (params) => 
  axios.get(api.shake,{
    params
  })
  
const queryWapReport4Terminal = (params) => 
  axios.get(api.queryWapReport4Terminal,{
    params :{
      payNo: params.payNo
    }
  })



const awardShare = (params) => 
axios.get(api.awardShare,{
  params
})
export {
  getUserCount,
  getSearchCount,
  getProductCount,
	getReport,
  getBrandcount,
  getJudgestring,
  getDetail,
  wxLogin,
  queryByMoblie,
  registration,
  wxInitial,
  shake,
  awardShare,
  queryWapReport4Terminal

}

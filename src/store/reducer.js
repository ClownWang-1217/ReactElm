import * as user from './action-type'

let defaultState = {
  imgpath: 'http://elm.cangdu.org/img/167e36b022d24619.jpg', //图片地址
  addressList: [],   // 地址列表
  addressName: '',  // 选中的地址
  temMessage: '', //临时姓名
  hasAddressList: [], // 已有的地址
  operate: 'edit',
  userInfo: {},
  temAddress: {
    message: ''
  },  //临时数据
  geohash: []
}

// 用户消息
export default (state = defaultState, action = {}) => {
  console.log(action)
  switch (action.type) {
    case user.SAVE_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case user.RESET_USERINFO:
      return {...state, ...{[action.datatype]: action.value}};
    default:
      return state
  }
}
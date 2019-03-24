import * as user from './action-type'

let defaultState = {
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
  switch (action.type) {
    case user.SAVE_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case user.SAVE_ATTRINFO:
      return {...state, ...{[action.datatype]: action.value}};
    case user.SAVE_IMG:
      return {...state, userInfo: {...state.userInfo, imgpath: action.imgpath}};
    default:
      return state
  }
}
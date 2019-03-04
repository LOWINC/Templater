// import GoodsApi from 'scrat-apis-person-interest/GoodsApi'


const INIT_STATE = {

}

export default {
  namespace: "_MODULE_NAME_",
  state: {
    ...INIT_STATE
  },
  reducers: {
    save (state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    initState (state) {
      return {
        ...state,
        ...INIT_STATE
      }
    }
  },
  effects: {
    // 基本信息
    // * getBaseData ({ payload: { id } }, { put, call }) {
    //   const res = yield call(GoodsApi.getById, id)
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       goodsInfo: res,
    //     }
    //   })
    // },
    // // 给予基本信息的额外信息
    // * getExtraData ({ payload: { id } }, { take, select, call, put }) {
    //   yield take("getProduct/@@end")
    //   const goodsInfo = yield select(s => s._MODULE_NAME_)
    //   if (goodsInfo.type === 'REAL') {
    //     const res = yield call(GoodsApi.getSkuGroupList, id)
    //     yield put({
    //       type: 'save',
    //       payload: {
    //         skuInfo: res,
    //       }
    //     })
    //   }
    // }
  },
  subscriptions: {
    // setup ({ dispatch, history }) {
    // return history.listen(({ pathname, query }) => {
    // if (pathname === '/_PAGE_NAME_') {
    //   dispatch({
    //     type: 'getDataById',
    //     payload: {
    //       id: query.id
    //     }
    //   })
    // } else {
    //   dispatch({
    //     type: "initState",
    //     payload: {}
    //   })
    // }
    // })
    // }
  }
}
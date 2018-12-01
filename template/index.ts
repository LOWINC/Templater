import Taro from "@tarojs/taro";

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
        INIT_STATE
      }
    }
  },
  effects: {
    // * getDataById ({ payload: { id } }, { put, call, select, take }) {

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
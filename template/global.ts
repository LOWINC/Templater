const INIT_STATE = {
  appConfig: {
    isAjaxed: false,
    data: {}
  }
}

export default {
  namespace: "global",
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
    },
  },
  effects: {
    // app的基础配置
    // 别的模块可能以此为依赖
    * getAppConfig ({ }, { put }) {
      // ajax
      const appConfig = {
        isAjaxed: true,
        data: {
          isShowNav: true,
          isShowIndex: true,
        }
      }

      yield put({
        type: "immer",
        payload: state => {
          state.appConfig = appConfig
        }
      })
    },
  },
}
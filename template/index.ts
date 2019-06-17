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
    },
    // DESC: immerPlugin
    // https://github.com/dvajs/dva/tree/master/packages/dva-immer
    immer (state, { payload: { handler } }) {
      handler(state)
    },
  },
  effects: {
    * getData ({ payload: { id } }, { put }) {

    },

    * getPageData ({ }, { select, take }) {
      const {
        appConfig: {
          isAjaxed,
          data: {
            isShowNav,
            isShowIndex
          }
        }
      } = yield select(s => s.global)

      if (!isAjaxed) {
        yield take('global/getAppConfig/@@end')
      }

      if (isShowNav) {
        // doSth
      }


      if (isShowIndex) {
        // doSth
      }

    },

    * updateByImmer ({ }, { put }) {
      const user = {
        name: "swq",
        job: "web"
      }

      yield put({
        type: "immer",
        payload: store => {
          store.user = user
        }
      })
    }
  },
}
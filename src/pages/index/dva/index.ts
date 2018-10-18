import {
  fetch
} from './servers'

export default {
  // TODO: 改名
  namespace: "MODULE_NAME",
  state: {
    mobile: '13221033190',
    info: ""
  },
  effects: {
    *login (_, { call, put, select }) {
      const { mobile } = yield select(state => state.login)
      const { info } = yield call(fetch, { mobile })

      yield put({
        type: 'saveLoginInfo',
        payload: {
          info: info
        }
      })
    }
  },
  reducers: {
    saveLoginInfo (state, { payload: { info } }) {
      return {
        ...state,
        info: info
      }
    }
  }
}
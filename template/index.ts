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
    // updateStatus (state, { payload: { status } }) {
    //   state.status = status
    // }
  },
  effects: {
    * getData ({ payload: { id } }, { put }) {

    },
  },
}
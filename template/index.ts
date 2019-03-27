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
    * getData ({ payload: { id } }, { put }) {

    },
  },
}
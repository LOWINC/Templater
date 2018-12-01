const INIT_STATE = {

}

export default {
  namespace: "_MODULE_NAME_",
  state: {
    ...INIT_STATE
  },
  effects: {
    // * getDataById ({ payload: { id } }, { put, call, select, take }) {

    // }
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
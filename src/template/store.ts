const INIT_STATE = {};

export type T_MODULE_NAME_ = typeof INIT_STATE;

export default {
  namespace: "_MODULE_NAME_",
  state: {
    ...INIT_STATE
  },
  reducers: {
    initState(state) {
      return {
        ...state,
        ...INIT_STATE
      };
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    // DESC: immerPlugin
    // https://github.com/dvajs/dva/tree/master/packages/dva-immer
    immer(state, { payload: { handler } }) {
      handler(state);
    }
  },
  effects: {
    *getData({ payload: { id } }, { put }) {},

    *updateByImmer({}, { put }) {
      const user = {
        name: "swq",
        job: "web"
      };

      yield put({
        type: "immer",
        payload: store => {
          store.user = user;
        }
      });
    }
    // DESC: watcher and do
    // *someEffects({}, {put}) {
    //   // ajax
    //   yield put({
    //     type: "immer",
    //     payload: state => {
    //       state.someData = {
    //         isVip: true
    //       };
    //     }
    //   });
    // },
    // watchSomeEffects: [
    //   function*({take, put, select}) {
    //     while (true) {
    //       yield take("someEffects/@@end");
    //       const {
    //         someData: {isVip}
    //       } = yield select(s => s._MODULE_NAME_);

    //       if (!isVip) {
    //         // doSth
    //         return;
    //       }
    //       // doSth
    //     }
    //   },
    //   {type: "watcher"}
    // ]
  }
};

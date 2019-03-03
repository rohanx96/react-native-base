import { ACTION_TYPE } from "./AppAction";
import createReducer from "../utils/CreateReducer";

const initState = {
  isBSOpen: false,
  isBSBackClose: true,
  isBSTouchoutsideClose: true,
  isLoading: false,
  topSafeAreaView: "#fff",
  bottomSafeAreaView: "#fff",
  renderBottomsheet: () => {}
};
export default createReducer(initState, {
  [ACTION_TYPE.openBottomSheet](state, action) {
    return Object.assign({}, state, {
      isBSOpen: true,
      isBSBackClose: action.payload.isBackClose,
      isBSTouchoutsideClose: action.payload.isTouchoutsideClose,
      renderBottomsheet: action.payload.renderBottomsheet
    });
  },
  [ACTION_TYPE.closeBottomSheet](state, action) {
    return Object.assign({}, state, {
      isBSOpen: false,
      isBSBackClose: true,
      isBSTouchoutsideClose: true,
      renderBottomsheet: action.payload
    });
  },
  [ACTION_TYPE.setLoading](state, action) {
    return Object.assign({}, state, {
      isLoading: action.payload
    });
  },
  [ACTION_TYPE.setTopSafeAreaView](state, action) {
    return Object.assign({}, state, {
      topSafeAreaView: action.payload
    });
  },
  [ACTION_TYPE.setBottomSafeAreaView](state, action) {
    return Object.assign({}, state, {
      bottomSafeAreaView: action.payload
    });
  },
  "persist/REHYDRATE": function onRehydrate(state) {
    return Object.assign({}, state, {
      isRehydrated: true
    });
  }
});

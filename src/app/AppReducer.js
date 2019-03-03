import { ACTION_TYPE } from "./AppAction";
import createReducer from "../utils/CreateReducer";

const initState = {
  isBSOpen: false,
  isBSBackClose: true,
  isBSTouchoutsideClose: true,
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
  "persist/REHYDRATE": function onRehydrate(state) {
    return Object.assign({}, state, {
      isRehydrated: true
    });
  }
});

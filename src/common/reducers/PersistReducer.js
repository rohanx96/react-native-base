import { ACTION_TYPE } from "../actions/PersistAction";
import createReducer from "../../utils/CreateReducer";

const initState = { selectedPrimaryFilter: undefined };
export default createReducer(initState, {
  [ACTION_TYPE.setPrimaryFilter](state, action) {
    return Object.assign({}, state, {
      selectedPrimaryFilter: action.payload
    });
  }
});

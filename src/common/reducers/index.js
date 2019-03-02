import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "../../app/AppReducer";
import PersistReducer from "./PersistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["persist"],
  debug: true
};

const AppReducer = combineReducers({
  app: appReducer,
  persist: PersistReducer
});

const RootReducer = (state, action) => {
  if (action.type === "CLEAR_STATE") {
    state = {
      app: { ...state.app }
    };
  }
  return AppReducer(state, action);
};

export default persistReducer(persistConfig, RootReducer);

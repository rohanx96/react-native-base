import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import persistedReducer from "./reducers";

const enhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(persistedReducer, {}, enhancer);

export const persistor = persistStore(store);

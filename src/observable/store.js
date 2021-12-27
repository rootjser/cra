import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "../common/reducer";
import rootEpic from "./epic";
// 只允许开发环境使用redux调试工具,正式环境无法使用
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

function configureStore(preStore = undefined) {
  const epicMiddleware = createEpicMiddleware();
  const newStore = createStore(
    rootReducer,
    preStore,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return newStore;
}

let store = configureStore();
export default store;

// import { createStore } from "redux";
// import rootReducer from "./observable/reducer";
// import { createEpicMiddleware } from "redux-observable";
// import rootEpic from "./observable/epic";

// const epicMiddleware = createEpicMiddleware();
// const store = createStore(rootReducer);
// export default store;
// // run 方法一定要在 createStore 方法之后
// epicMiddleware.run(rootEpic);

import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./observable/reducer";
import rootEpic from "./observable/epic";
// 只允许开发环境使用redux调试工具,正式环境无法使用
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// const epicMiddleware = createEpicMiddleware(rootEpic);
// const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
// export default store;

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

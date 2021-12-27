import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";

import reducer from "./common/reducer";
import rootSaga from "./saga/effect";
import rootEpic from "./observable/epic";
// 只允许开发环境使用redux调试工具,正式环境无法使用
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
function configureStore(preStore = undefined) {
  // create the observable middleware
  const epicMiddleware = createEpicMiddleware();
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store
  const store = createStore(
    reducer,
    preStore,
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
      applyMiddleware(sagaMiddleware)
    )
  );
  // then run the saga
  sagaMiddleware.run(rootSaga);
  // then run the observable
  epicMiddleware.run(rootEpic);
  return store;
}
export default configureStore();

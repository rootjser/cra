import React from "react";
import dva from "dva";
import { BrowserRouter, Route, Link } from "dva/router";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import UserPage from "./components/UserPage";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";
// import rootSaga from "./saga/effect";
import rootEpic from "./observable/epic";
import obReducer from "./common/reducer";
import reducerSaga from "./common/reducer/reducerSaga";
import { SAGA } from "./common/action";
import Api from "./saga/api";
import undoable from "redux-undo";
import { combineReducers } from "redux";

import reducerUser from "./common/reducer/reducerUser";
// import reducerSaga from "./reducerSaga";
import reducerCount from "./common/reducer/reducerCount";

// create the observable middleware
const epicMiddleware = createEpicMiddleware();
// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

const BaseLayout = () => (
  <div className="base">
    <header>
      <p>React Router v4 Browser Example</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">路由加1</Link>
          </li>
          <li>
            <Link to="/contact">路由减1</Link>
          </li>
          <li>
            <Link to="/user">用户信息请求</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/user" component={UserPage} />
    </div>
    <footer>React Router v4 Browser Example (c) 2017</footer>
  </div>
);

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);

// 创建应用
const app = dva({
  onAction: [epicMiddleware],
  extraReducers: {
    reducerUser,
    reducerCount,
  },
});
app.model({
  namespace: "reducerSaga",
  state: {
    name: "",
    avatar_urlsaga: "",
  },
  reducers: {
    GITHUB_SAGA_API(state) {
      return {
        ...state,
        name: "",
        avatar_urlsaga: "",
      };
    },
    SET_SAGA_INFO(state, action) {
      console.log("SET_SAGA_INFO", state, action);
      let {
        payload: { name, avatar_url },
      } = action;
      return {
        ...state,
        name,
        avatar_urlsaga: avatar_url,
      };
    },
  },
  effects: {
    *GITHUB_SAGA_API(action, { call, put }) {
      try {
        const result = yield call(Api.fetchUser);
        console.log(result);
        yield put({ type: "SET_SAGA_INFO", payload: result.data });
      } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
      }
    },
  },
});

// 注册视图
app.router(() => <App />);
// 启动应用
app.start("#root");
// then run the saga
// sagaMiddleware.run(rootSaga);
// then run the observable
epicMiddleware.run(rootEpic);

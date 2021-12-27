import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./observable/store";
import store from "./saga/store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import UserPage from "./components/UserPage";

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
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProfilePage from "./components/ProfilePage";
import RegisterPage from "./components/RegisterPage";

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/me">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/me" component={ProfilePage} />
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

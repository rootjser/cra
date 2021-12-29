import axios from "axios";
import fetch from "dva/fetch";

function fetchUser(payload) {
  // return axios.get("https://api.github.com/users/redux-saga");
  return fetch("https://api.github.com/users/redux-saga").then((res) =>
    res.json()
  );
}

export default {
  fetchUser,
};

import axios from "axios";

const fetchUser = (payload) => {
  return axios.get("https://api.github.com/users/redux-saga");
};

export default {
  fetchUser,
};

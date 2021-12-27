import axios from "axios";

const fetchUser = (payload) => {
  return axios.get("https://api.github.com/users/soraping");
};

export default {
  fetchUser,
};

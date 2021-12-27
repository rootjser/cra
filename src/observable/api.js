import { ajax } from "rxjs/ajax";

const fetchUser = (payload) => {
  return ajax.getJSON("https://api.github.com/users/redux-observable");
};

export default {
  fetchUser,
};

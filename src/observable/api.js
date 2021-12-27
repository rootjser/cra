import { ajax } from "rxjs/ajax";

const fetchUser = (payload) => {
  return ajax.getJSON("https://api.github.com/users/soraping");
};

export default {
  fetchUser,
};

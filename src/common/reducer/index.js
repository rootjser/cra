import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
// import reducerSaga from "./reducerSaga";
import reducerCount from "./reducerCount";

export default combineReducers({
  reducerUser,
  reducerCount,
  // reducerSaga,
});

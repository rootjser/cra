import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerCount from "./reducerCount";

export default combineReducers({
  reducerUser,
  reducerCount,
});

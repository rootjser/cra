import { epicUser } from "./epicUser";
// import { epicCount } from "./epicCount";
import { combineEpics } from "redux-observable";

export default combineEpics(epicUser);

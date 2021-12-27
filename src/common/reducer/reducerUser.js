import { USER } from "../../common/action";
const initialState = {
  name: "",
  avatar_url: "",
};
export default function reducerUser(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case USER.GITHUB_USER_API:
      return {
        ...state,
        name: "",
        avatar_url: "",
      };
    case USER.SET_USER_INFO:
      let {
        payload: { name, avatar_url },
      } = action;
      return {
        ...state,
        name,
        avatar_url,
      };
    default:
      return state;
  }
}

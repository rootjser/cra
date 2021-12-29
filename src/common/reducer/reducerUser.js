import { OB } from "../action";
const initialState = {
  name: "",
  avatar_url: "",
};
export default function reducerUser(state = initialState, action) {
  switch (action.type) {
    case OB.GITHUB_OB_API:
      console.log("reducer", action);
      return {
        ...state,
        name: "",
        avatar_url: "",
      };
    case OB.SET_OB_INFO:
      console.log("reducer ob", state, action);
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

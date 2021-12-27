import { SAGA } from "../action";
const initialState = {
  name: "",
  avatar_url: "",
};
export default function reducerUser(state = initialState, action) {
  switch (action.type) {
    case SAGA.GITHUB_SAGA_API:
      console.log("reducer", action);
      return {
        ...state,
        name: "",
        avatar_url: "",
      };
    case SAGA.SET_SAGA_INFO:
      console.log("reducer", action);
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

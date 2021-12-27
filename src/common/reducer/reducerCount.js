import { Count } from "../../common/action";
const initialState = {
  counter: 0,
};
export default function reducerCount(state = initialState, action) {
  switch (action.type) {
    case Count.INCREASE:
      return {
        counter: state.counter + 1,
      };
    case Count.DECREASE:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { OB, SAGA } from "../common/action";
// import { useDispatch } from "../observable/reducer";
const UserPage = (props) => {
  // const dispatch = useDispatch();
  const { dispatch } = props;
  const click = () => {
    console.log("click GITHUB_OB_API");
    dispatch({ type: OB.GITHUB_OB_API });
    dispatch({ type: SAGA.GITHUB_SAGA_API });
  };
  return (
    <div>
      This is a User Page
      <button onClick={click}>请求</button>
    </div>
  );
};
const mapStateToProps = ({ reducerUser }) => ({ reducerUser });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     ...bindActionCreators(
//       { getGitHubUser: userActions.getGitHubUser },
//       dispatch
//     ),
//   };
// };
export default connect(mapStateToProps)(UserPage);

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { USER } from "../observable/action";
// import { useDispatch } from "../observable/reducer";
const UserPage = (props) => {
  // const dispatch = useDispatch();
  const { dispatch } = props;
  const click = () => {
    console.log("click GITHUB_USER_API");
    dispatch({ type: USER.GITHUB_USER_API });
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

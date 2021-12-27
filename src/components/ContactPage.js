import React from "react";
import { connect } from "react-redux";
import { Count } from "../common/action";
const ContactPage = (props) => {
  const { dispatch } = props;
  const click = () => {
    dispatch({
      type: Count.DECREASE,
    });
  };
  return (
    <div>
      This is a ContactPage Page
      <button onClick={click}>点击减1</button>
    </div>
  );
};
export default connect(({ reducerCount: { counter } }) => ({ counter }))(
  ContactPage
);

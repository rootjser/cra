import React from "react";
import { connect } from "react-redux";
import { Count } from "../common/action";
const AboutPage = (props) => {
  const { dispatch } = props;
  const click = () => {
    dispatch({
      type: Count.INCREASE,
    });
  };
  return (
    <div>
      This is a AboutPage Page
      <button onClick={click}>点击加1</button>
    </div>
  );
};
export default connect(({ reducerCount: { counter } }) => ({ counter }))(
  AboutPage
);

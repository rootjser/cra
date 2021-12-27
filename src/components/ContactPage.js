import { connect } from "react-redux";
const ContactPage = (props) => {
  const { dispatch } = props;
  const click = () => {
    dispatch({
      type: "decrement",
    });
  };
  return (
    <div>
      This is a ContactPage Page
      <button onClick={click}>点击减1</button>
    </div>
  );
};
export default connect(({ counter }) => ({ counter }))(ContactPage);

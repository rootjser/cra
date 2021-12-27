import { connect } from "react-redux";
const AboutPage = (props) => {
  const { dispatch } = props;
  const click = () => {
    dispatch({
      type: "increment",
    });
  };
  return (
    <div>
      This is a AboutPage Page
      <button onClick={click}>点击加1</button>
    </div>
  );
};
export default connect(({ counter }) => ({ counter }))(AboutPage);

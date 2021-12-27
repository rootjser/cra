import { connect } from "react-redux";
const HomePage = (props) => {
  const { counter } = props;
  return (
    <div>
      This is a Home Page
      {counter}
    </div>
  );
};
export default connect(({ counter }) => ({ counter }))(HomePage);

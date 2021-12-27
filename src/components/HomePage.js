import React from "react";
import { connect } from "react-redux";
const HomePage = (props) => {
  const { reducerCount, reducerUser } = props;
  return (
    <div>
      主页
      <p>计数：{reducerCount.counter}</p>
      <div>
        用户信息请求
        <p>姓名:{reducerUser.name}</p>
        <p>
          {reducerUser.avatar_url ? <img src={reducerUser.avatar_url} /> : null}
        </p>
      </div>
    </div>
  );
};
export default connect(({ reducerCount, reducerUser }) => ({
  reducerCount,
  reducerUser,
}))(HomePage);

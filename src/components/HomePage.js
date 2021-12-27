import React from "react";
import { connect } from "react-redux";
const HomePage = (props) => {
  const { reducerCount, reducerUser, reducerSaga } = props;
  return (
    <div>
      主页
      <p>计数：{reducerCount.counter}</p>
      <div>
        OB 用户信息请求
        <p>姓名:{reducerUser.name}</p>
        <p>
          {reducerUser.avatar_url ? <img src={reducerUser.avatar_url} /> : null}
        </p>
      </div>
      <div>
        Saga 用户信息请求
        <p>姓名:{reducerSaga.name}</p>
        <p>
          {reducerSaga.avatar_url ? <img src={reducerSaga.avatar_url} /> : null}
        </p>
      </div>
    </div>
  );
};
export default connect(({ reducerCount, reducerUser, reducerSaga }) => ({
  reducerCount,
  reducerUser,
  reducerSaga,
}))(HomePage);

import React from "react";
// import { connect } from "react-redux";
import { connect } from "dva";
const HomePage = (props) => {
  // console.log("home change before");
  const { reducerCount, reducerUser, reducerSaga } = props;
  // console.log(2222222, props);
  return (
    <div>
      主页
      <p>计数：{reducerCount?.counter}</p>
      <div>
        OB 用户信息请求
        <p>姓名:{reducerUser?.name}</p>
        <p>
          {reducerUser?.avatar_url ? (
            <img src={reducerUser?.avatar_url} />
          ) : null}
        </p>
      </div>
      <div>
        Saga 用户信息请求
        <p>姓名:{reducerSaga?.name}</p>
        <p>
          {reducerSaga?.avatar_urlsaga ? (
            <img src={reducerSaga?.avatar_urlsaga} />
          ) : null}
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

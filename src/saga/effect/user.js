import { call, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { USER } from "../../common/action";
import Api from "../api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const result = yield call(Api.fetchUser);
    console.log(result);
    yield put({ type: USER.SET_USER_INFO, payload: result.data });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchGetUsersRequest() {
  yield takeEvery(USER.GITHUB_USER_API, fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;

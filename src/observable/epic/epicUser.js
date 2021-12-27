import { ofType } from "redux-observable";
import { throwError } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { USER } from "../action";
import { mergeMap } from "rxjs/operators";

const url = "https://api.github.com/users/soraping";

// action creators
const fetchUser = () => ({
  type: USER.GITHUB_USER_API,
});
const fetchUserFulfilled = (payload) => ({
  type: USER.SET_USER_INFO,
  payload,
});

export const epicUser = (action$) =>
  action$.pipe(
    ofType(USER.GITHUB_USER_API),
    mergeMap((action) => {
      return ajax.getJSON(url).pipe(
        map((payload) => {
          return {
            type: USER.SET_USER_INFO,
            payload,
          };
        })
      );
    })
  );

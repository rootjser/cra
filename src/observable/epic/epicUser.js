import { ofType } from "redux-observable";
import { throwError } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { USER } from "../../common/action";
import { mergeMap } from "rxjs/operators";
import Api from "../api";

export const epicUser = (action$) =>
  action$.pipe(
    ofType(USER.GITHUB_USER_API),
    mergeMap((action) => {
      return Api.fetchUser().pipe(
        map((payload) => {
          return {
            type: USER.SET_USER_INFO,
            payload,
          };
        })
      );
    })
  );

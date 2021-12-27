import { ofType } from "redux-observable";
import { throwError } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { OB } from "../../common/action";
import { mergeMap } from "rxjs/operators";
import Api from "../api";

export const epicUser = (action$) =>
  action$.pipe(
    ofType(OB.GITHUB_OB_API),
    mergeMap((action) => {
      return Api.fetchUser().pipe(
        map((payload) => {
          return {
            type: OB.SET_OB_INFO,
            payload,
          };
        })
      );
    })
  );

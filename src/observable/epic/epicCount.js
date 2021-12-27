import { ofType } from "redux-observable";
import { throwError } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { Count } from "../action";

const url = "https://api.github.com/users/soraping";

export const epicCount = (action$) =>
  action$.pipe(
    ofType(Count.INCREASE),
    switchMap(() => {
      return ajax.getJSON(url).pipe(
        map((res) => {
          return {};
        }),
        catchError((err) => throwError(err))
      );
    })
  );

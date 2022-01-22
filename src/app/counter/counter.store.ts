import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

export interface State {
  count: number;
}

export interface Status {
  message: string;
  code: number;
}

@Injectable()
export class CounterStore extends ComponentStore<State> {
  constructor(private http: HttpClient) {
    super({ count: 0 });
  }

  public readonly count$: Observable<number> = this.select((state) => state.count);

  public readonly increment = this.updater((state) => ({ count: state.count + 1 }));

  public readonly decrement = this.updater((state) => ({ count: state.count - 1 }));

  public readonly put = this.effect(
    (count$: Observable<number>) => {
      return count$.pipe(
        switchMap((count) => {
          return this.getStatus()
            .pipe(
              tap(
                (res) => {
                  console.log(res);
                },
                (err) => {
                  console.log(err);
                }
              ),
              catchError(() => EMPTY)
            );
        })
      );
    }
  );

  private getStatus(): Observable<number> {
    return this.http
      .get<Status>(
        "http://localhost:3000/status",
        {
          observe: 'response'
        }
      )
      .pipe(map((res) => res.status));
  }
}

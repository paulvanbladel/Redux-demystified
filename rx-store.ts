import {Reducer, Action, ListenerCallback, UnsubscribeCallback} from './interfaces';

import {Subject, BehaviorSubject} from 'rxjs';

export class RxStore<T> extends BehaviorSubject<T>{

  private _dispatcher: Subject<Action>

  constructor(private _reducer: Reducer<T>, initialState: T) {
    super(initialState);
    this._dispatcher = new Subject<Action>();
    this._dispatcher
      .scan((state: T, action: Action) => this._reducer(state, action), initialState)
      .subscribe((state) => super.next(state));
  }

  getState(): T {
    return this.value;
  }

  dispatch(action: Action): void {
    this._dispatcher.next(action);
  }
}
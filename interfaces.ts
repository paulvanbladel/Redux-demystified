interface Action {
  type: string,
  payload?: any
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}

interface AppState {
  counter:number;
}

export {Action, Reducer, ListenerCallback, UnsubscribeCallback, AppState}
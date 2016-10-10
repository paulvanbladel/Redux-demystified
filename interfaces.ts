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
export {Action, Reducer, ListenerCallback, UnsubscribeCallback}
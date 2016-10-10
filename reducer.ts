import {Reducer, Action} from './interfaces';

let NumberReducer: Reducer<number>
  = (state: number, action: Action) => {
    let actionType: string = null;

    if (action !== null) {
      actionType = action.type;
    }

    switch (actionType) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'PLUS':
        return state + action.payload;
      default:
        return state;
    }
  }
export {NumberReducer };
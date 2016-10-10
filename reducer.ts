import {AppState, Action} from './interfaces';
import {Reducer} from 'redux';
let initialState: AppState = { counter: 0 };

let NumberReducer: Reducer<AppState>
  = (state: AppState = initialState, action: Action): AppState => {
    let actionType: string = null;

    if (action !== null) {
      actionType = action.type;
    }

    switch (actionType) {
      case 'INCREMENT':
        return (<any>Object).assign({}, state, { counter: state.counter + 1 })
      case 'DECREMENT':
        return (<any>Object).assign({}, state, { counter: state.counter - 1 })
      case 'PLUS':
        return (<any>Object).assign({}, state, { counter: state.counter + action.payload })
      default:
        return state;
    }
  }
export {NumberReducer };
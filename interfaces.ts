import {Action as ReduxAction} from 'redux';

interface Action extends ReduxAction {
   payload?: any
}


interface AppState {
  counter:number;
}

export {Action,  AppState}
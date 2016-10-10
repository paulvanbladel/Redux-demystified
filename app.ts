import {NumberReducer} from './reducer';
import {AppState} from './interfaces';
import {createStore } from 'redux';



let store = createStore<AppState>(NumberReducer, {counter:10});

console.log("initial value " + store.getState().counter);

let unsubscribe = store.subscribe(() => {
  console.log('non-reactive subscription : ' + store.getState().counter);
})

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'PLUS', payload: 7 });

unsubscribe();

store.dispatch({ type: 'PLUS', payload: 7 });

console.log(store.getState());





let store2 = createStore<AppState>(NumberReducer, {counter:1000});

console.log("initial value " + store2.getState().counter);


store2.subscribe(() => {
  console.log('reactive subscription : ' + store2.getState().counter);
})

store2.dispatch({ type: 'INCREMENT' });
store2.dispatch({ type: 'DECREMENT' });
store2.dispatch({ type: 'PLUS', payload: 7 });
console.log(store2.getState().counter);


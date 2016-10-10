import {NumberReducer} from './reducer';
import {RxStore} from './rx-store';
import {AppState} from './interfaces';
import {Store} from './store';


//THE NON-REACTIVE STORY

let store = new Store<AppState>(NumberReducer, {counter:10});

//console.log(store.getState().counter);

let unsubscribe = store.subscribe(() => {
  console.log('non-reactive subscription : ' + store.getState().counter);
})

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'PLUS', payload: 7 });

unsubscribe();

store.dispatch({ type: 'PLUS', payload: 7 });

console.log(store.getState());




//THE REACTIVE STORY
let rxStore = new RxStore<AppState>(NumberReducer, {counter:100});

//console.log(rxStore.getState());


rxStore.subscribe(() => {
  console.log('reactive subscription : ' + rxStore.getState().counter);
})

rxStore.dispatch({ type: 'INCREMENT' });
rxStore.dispatch({ type: 'DECREMENT' });
rxStore.dispatch({ type: 'PLUS', payload: 7 });
console.log(rxStore.getState().counter);


import {NumberReducer} from './reducer';
import {RxStore} from './rx-store';

import {Store} from './store';


//THE NON-REACTIVE STORY

let store= new Store<number>(NumberReducer,99);

console.log(store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log('non-reactive subscription : ' + store.getState());
})

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({ type: 'PLUS', payload: 7 });

unsubscribe();

store.dispatch({ type: 'PLUS', payload: 7 });

console.log(store.getState());




//THE REACTIVE STORY
let rxStore= new RxStore<number>(NumberReducer,99);

console.log(rxStore.getState());


rxStore.subscribe(()=>{
    console.log('reactive subscription : ' + rxStore.getState());
})

rxStore.dispatch({type:'INCREMENT'});
rxStore.dispatch({type:'DECREMENT'});
rxStore.dispatch({ type: 'PLUS', payload: 7 });
console.log(rxStore.getState());


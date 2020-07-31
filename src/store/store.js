import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import currencyReducer from '../reducers/currencies'

const middelewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    raceLimit: 55,
    }) : compose;
    

const reducers = combineReducers ({
    currencies: currencyReducer,
    
})

const store = createStore(reducers,composeEnhancers(applyMiddleware(...middelewares)));

export default store;
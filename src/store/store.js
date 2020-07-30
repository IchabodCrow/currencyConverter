import { createStore, combineReducers } from 'redux'

import fetchCurrencyReducer from '../reducers/reducer'

const reducers = combineReducers ({
    fetchCurrencyReducer
})

const store = createStore(reducers);

export default store;
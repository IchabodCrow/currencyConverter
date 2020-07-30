import { GET_CURRENCY_LIST } from '../actions/actions'

const fetchCurrencyReducer = ( state = [], action) => {

    switch (action.type) {
        
        case GET_CURRENCY_LIST : 
        debugger
            return [...state, action.data]
        
        default : 
            return state
    }
}

export default fetchCurrencyReducer
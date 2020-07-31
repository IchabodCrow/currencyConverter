import { GET_CURRENCY_LIST } from '../actions/actions'

const currencyReducer = ( state = [], action) => {
    switch (action.type) {
        
        case GET_CURRENCY_LIST : 
            return action.data.ValCurs.Valute
        
        default : 
            return state
    }
}

export default currencyReducer
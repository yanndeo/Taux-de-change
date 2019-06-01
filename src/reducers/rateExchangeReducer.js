import { GET_RATE_EXCHANGE } from '../actions/types';



//Pseudo valeur de base de countriesReducer dans le combineReducer
const initialState = {
    rate_exchangeList : []
};


export default function (state = initialState , action) {

    let nextState;
    const { type, payload } = action

    switch (type) {

        case GET_RATE_EXCHANGE:
            return nextState = {
                ...state,
                rate_exchangeList: [payload , ...state.rate_exchangeList ]
            };

        default:
            return nextState || state
    }
    //if this reducers isn't interessed by the action  , return me just state without touch it.


};


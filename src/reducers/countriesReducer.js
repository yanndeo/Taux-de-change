import { GET_COUNTRIES } from '../actions/types';
import { supportedCurrencyCode } from "../utils/supportedCurrencies";




//Pseudo valeur de base de countriesReducer dans le combineReducer
const initialState = {
  countries: []
};


export default function (state = initialState, action){

let nextState;
const { type , payload } = action

     switch(type){

        case GET_COUNTRIES:
            return nextState = {
                ...state,
                countries: getCountriesInfos(payload)
            }

        default:
            return  nextState || state 
    }
   //if this reducers isn't interessed by the action  , return me just state without touch it.


};

/**
 * We choose important infos in datas , that we use in apps
 */
function getCountriesInfos(data){

    return data
            .map(c => {
                    return {
                        name: c.name,
                        currencyCode: c.currencies[0].code,
                        flag: c.flag,
                        code: c.alpha3Code
                    };
            }).filter(c => {
                return supportedCurrencyCode.indexOf(c.currencyCode) > -1 
            });

}
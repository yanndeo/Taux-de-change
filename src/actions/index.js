import axios from 'axios'
//Types 
import { GET_COUNTRIES, GET_RATE_EXCHANGE } from "./types";
//Utils
import { formatedDate, getLastMonth } from '../utils/func';


export const _fetchCountries= ()=> async dispatch =>{

    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');

        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        });
        
    } catch (error) {
        console.log('fetchcountries_action',error)

    }
   
};


export const _fetchRateExchange= country =>async dispatch=>{
    console.log(country.code )

    try {
        const response = await axios.get(
            `https://api.exchangeratesapi.io/history?start_at=${getLastMonth()}&end_at=${formatedDate(new Date())}&base=USD&symbols=${country.currencyCode}`
        );
        console.log(response.data)
        dispatch({
            type: GET_RATE_EXCHANGE,
            payload: { rates: response.data.rates, ...country }
        });

    } catch (error) {
        console.log('fetchrate_action',error)

    }

}


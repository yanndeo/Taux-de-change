import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import rateExchangeReducer from './rateExchangeReducer';

const rootReducer = combineReducers({
  
  countries : countriesReducer,
  ratesExchange: rateExchangeReducer 

});

export default rootReducer;

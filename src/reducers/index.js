import { combineReducers } from 'redux';
import SearchTermReducer from './SearchTermReducer.js';
import FetchWeatherReducer from './FetchWeatherReducer';
const rootReducer = combineReducers({
  searchTerm: SearchTermReducer,
  weather: FetchWeatherReducer,
});

export default rootReducer;

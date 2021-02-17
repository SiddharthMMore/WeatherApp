import { FETCH_WEATHER, UPDATE_SEARCH_TERM } from './types';
export function fetchWeather(cityName) {
  return {
    type: FETCH_WEATHER,
    cityName,
  };
}

export function updateSearchTerm(newSearchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: newSearchTerm,
  };
}

import { WEATHER_FETCHED } from '../actions/types';

export default (state = [], action) => {
  const existing = () => {
    let res = false;
    state.forEach((current) => {
      if (current.city.id === action.payload.city.id) {
        res = true;
      }
    });
    return res;
  };
  switch (action.type) {
    case WEATHER_FETCHED:
      if (!existing()) return [action.payload, ...state];
  }
  return state;
};

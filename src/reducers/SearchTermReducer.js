import { UPDATE_SEARCH_TERM } from '../actions/types';
export default (term = null, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return action.payload;
  }
  return term;
};

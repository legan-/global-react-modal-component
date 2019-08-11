import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

const isActive = (state = initialState.modal.isActive, action) => {
  switch (action.type) {
    case TYPES.SHOW_MODAL:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  isActive
});

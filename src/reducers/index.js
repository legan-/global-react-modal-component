import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '~/src/constants/ActionTypes';

import modal from './modal';

const loggedIn = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_LOG_IN:
      return !state;
    default:
      return state;
  }
};

const darkerBackgroundColor = (state = initialState.darkerBackgroundColor, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_BACKGROUND_COLOR:
      return !state;
    default:
      return state;
  }
};

const biggerFontSize = (state = initialState.biggerFontSize, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_FONT_SIZE:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  modal,
  loggedIn,
  darkerBackgroundColor,
  biggerFontSize,
});

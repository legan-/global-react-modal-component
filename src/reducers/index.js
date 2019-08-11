import { combineReducers } from 'redux';

import initialState from './initialState';
// import TYPES from '../constants/ActionTypes';

import modal from './modal';

const loggedIn = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const darkerBackgroundColor = (state = initialState.darkerBackgroundColor, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const biggerFontSize = (state = initialState.biggerFontSize, action) => {
  switch (action.type) {
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

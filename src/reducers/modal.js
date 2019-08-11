import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '~/src/constants/ActionTypes';

const action = (state = initialState.modal.action, action) => {
  switch (action.type) {
    case TYPES.SHOW_MODAL:
      return action.payload.action;
    case TYPES.TOGGLE_LOG_IN:
    case TYPES.TOGGLE_BACKGROUND_COLOR:
    case TYPES.TOGGLE_FONT_SIZE:
    case TYPES.HIDE_MODAL:
      return '';
    default:
      return state;
  }
};

const title = (state = initialState.modal.title, action) => {
  switch (action.type) {
    case TYPES.SHOW_MODAL:
      return action.payload.title;
    case TYPES.TOGGLE_LOG_IN:
    case TYPES.TOGGLE_BACKGROUND_COLOR:
    case TYPES.TOGGLE_FONT_SIZE:
    case TYPES.HIDE_MODAL:
      return '';
    default:
      return state;
  }
};

const message = (state = initialState.modal.message, action) => {
  switch (action.type) {
    case TYPES.SHOW_MODAL:
      return action.payload.message;
    case TYPES.TOGGLE_LOG_IN:
    case TYPES.TOGGLE_BACKGROUND_COLOR:
    case TYPES.TOGGLE_FONT_SIZE:
    case TYPES.HIDE_MODAL:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  action,
  title,
  message,
});

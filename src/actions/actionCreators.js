import TYPES from '../constants/ActionTypes';

export const showModal = ({ action, title, message }) => ({
  type: TYPES.SHOW_MODAL,
  payload: {
    action,
    title,
    message,
  }
});

export const hideModal = () => ({
  type: TYPES.HIDE_MODAL
});

export const toggleLogIn = () => ({
  type: TYPES.TOGGLE_LOG_IN
});

export const toggleBackgroundColor = () => ({
  type: TYPES.TOGGLE_BACKGROUND_COLOR
});

export const toggleFontSize = () => ({
  type: TYPES.TOGGLE_FONT_SIZE
});
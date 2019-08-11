import * as actions from './actionCreators';
import ACTIONS from '~/src/constants/Actions';

export const showModal = (action = '') => dispatch => {
  if (!action.length) return;

  const {
    title,
    message
  } = ACTIONS[action];

  dispatch(actions.showModal({
    action,
    title,
    message,
  }));  
};

export const confirm = () => (dispatch, getState) => {
  const {
    modal: {
      action
    }
  } = getState();

  switch (action) {
    case 'logIn':
    case 'logOut':
      dispatch(actions.toggleLogIn());
      break;
    case 'changeBackgroundColor':
      dispatch(actions.toggleBackgroundColor());
      break;
    case 'changeFontSize':
      dispatch(actions.toggleFontSize());
      break;
    // no default
  }
};

export const hideModal = () => dispatch => {
  dispatch(actions.hideModal());
};

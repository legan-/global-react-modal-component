import * as actions from './actionCreators';

export const showLogInModal = () => dispatch => {
  dispatch(actions.showModal());
};

export const showLogOutModal = () => dispatch => {
  dispatch(actions.showModal());
};

export const showChangeBackgroundColorModal = () => dispatch => {
  dispatch(actions.showModal());
};

export const showChangeFontSizeModal = () => dispatch => {
  dispatch(actions.showModal());
};

import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  hideModal,
  confirm,
} from '~/src/actions';

import {
  Transition
} from './components';

Modal.propTypes = {
  isActive: TYPES.bool.isRequired,
  title: TYPES.string.isRequired,
  message: TYPES.string.isRequired,
  confirm: TYPES.func.isRequired,
  hideModal: TYPES.func.isRequired,
};

function Modal({
  isActive,
  title,
  message,
  confirm,
  hideModal,
}) {
    
  return (
    <Dialog
      open={ isActive }
      fullWidth={ true }
      TransitionComponent={ Transition }
      onClose={ hideModal }
    >
      <DialogTitle>
        { title }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          { message }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={ hideModal }
          color='default'
          variant='contained'
        >
          Cancel
        </Button>
        <Button
          onClick={ confirm }
          color='primary'
          variant='contained'
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  isActive: state.modal.action.length > 0,
  title: state.modal.title,
  message: state.modal.message,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    hideModal,
    confirm,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
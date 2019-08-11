import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  Content,
  Wrapper,
} from './components';

import {
  showModal
} from '~/src/actions';

Main.propTypes = {
  showModal: TYPES.func.isRequired,
};

function Main({
  showModal
}) {
  return (
    <Wrapper>
      <Typography
        variant='h3'
        gutterBottom
      >
        Main
      </Typography>
      <Content>
        <Button
          color='primary'
          variant='contained'
          onClick={ () => showModal('changeBackgroundColor') }
        >
          Change Background Color
        </Button>
      </Content>
    </Wrapper>
  );
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    showModal
  }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
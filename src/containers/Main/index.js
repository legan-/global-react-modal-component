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
  showChangeBackgroundColorModal
} from '~/src/actions';

Main.propTypes = {
  showChangeBackgroundColorModal: TYPES.func.isRequired,
};

function Main({
  showChangeBackgroundColorModal
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
          onClick={ showChangeBackgroundColorModal }
        >
          Change Background Color
        </Button>
      </Content>
    </Wrapper>
  );
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    showChangeBackgroundColorModal
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
import React from 'react';
// import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  Content,
  Wrapper,
} from './components';

function Main() {
  return (
    <Wrapper>
      <Typography variant='h3' gutterBottom>
        Main
      </Typography>
      <Content>
        <Button color='primary' variant='contained'>
          Open modal on Main page
        </Button>
      </Content>
    </Wrapper>
  );
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({

  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
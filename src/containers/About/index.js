import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  Content,
  Text,
  Wrapper,
} from './components';

import {
  showChangeFontSizeModal
} from '~/src/actions';

About.propTypes = {
  showChangeFontSizeModal: TYPES.func.isRequired,
};

function About({
  showChangeFontSizeModal,
}) {
  return (
    <Wrapper>
      <Typography
        variant='h3'
        gutterBottom
      >
        About
      </Typography>
      <Content
        textSize=''
      >
        <Text>
          We believe technology must be simple, affordable and useful. Our company is built on compassion, by people who understand what it’s like to care for loved ones.
        </Text>
        <Text>
          We make peace-of-mind affordable for everyone, which is why some of our profit will always be dedicated to helping people in developing nations who have limited access to healthcare.
        </Text>
        <Button
          color='primary'
          variant='contained'
          onClick={ showChangeFontSizeModal }
        >
          Change Font Size
        </Button>
      </Content>
    </Wrapper>
  );
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    showChangeFontSizeModal
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
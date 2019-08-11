import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  Nav,
  NavButton,
  Wrapper,
} from './components';

import {
  showModal,
} from '~/src/actions';

Header.propTypes = {
  location: TYPES.object.isRequired,
  loggedIn: TYPES.bool.isRequired,
  showModal: TYPES.func.isRequired,
};

function Header({
  location,
  loggedIn,
  showModal,
}) {

  return (
    <Wrapper>
      <Nav>
        <NavButton
          linkTo='/'
          pathname={ location.pathname }
        >
          Home
        </NavButton>
        <NavButton
          linkTo='/about'
          pathname={ location.pathname }
        >
          About
        </NavButton>
      </Nav>
      <Nav>
        <NavButton
          onClick={ loggedIn ? () => showModal('logOut') : () => showModal('logIn') }
        >
          { loggedIn ? 'Log Out' : 'Log In' }
        </NavButton>
      </Nav>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    showModal,
  }, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

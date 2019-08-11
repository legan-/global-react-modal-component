import React from 'react';
import * as TYPES from 'prop-types';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import {
  Container,
  Footer,
  Wrapper,
} from './components';

import {
  About,
  Header,
  Main,
  Modal,
} from '~/src/containers';

import { date } from '~/src/helpers';
import { name } from '~/config';

App.propTypes = {
  darkerBackgroundColor: TYPES.bool.isRequired,
};

function App({
  darkerBackgroundColor
}) {
  return (
    <Router>
      <Wrapper darkerBackgroundColor={ darkerBackgroundColor }>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={ Main } />
            <Route path='/about' component={ About } />
          </Switch>
        </Container>
        <Footer
          year={ date().year }
          name={ name }
        />
      </Wrapper>
      <Modal />
    </Router>
  );
}

const mapStateToProps = state => ({
  darkerBackgroundColor: state.darkerBackgroundColor
});

export default hot(module)(connect(
  mapStateToProps,
)(App));

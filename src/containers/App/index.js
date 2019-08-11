import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import {
  Container,
  Header,
  Footer,
  Wrapper,
} from './components';

import {
  About,
  Main,
} from '../index';

import { date } from '~/src/helpers';
import { name } from '~/config';

function App() {
  return (
    <Router>
      <Wrapper>
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
    </Router>
  );
}

export default hot(module)(App);

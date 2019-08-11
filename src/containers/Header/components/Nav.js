import React from 'react';
import * as TYPES from 'prop-types';

Nav.propTypes = {
  children: TYPES.node.isRequired
};

function Nav({ children }) {
  return (
    <ul>
      { children }
    </ul>
  );
}

export default Nav;
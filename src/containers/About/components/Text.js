import React from 'react';
import * as TYPES from 'prop-types';

Text.propTypes = {
  children: TYPES.node.isRequired
};

function Text({ children }) {
  return (
    <p>
      { children }
    </p>
  );
}

export default Text;
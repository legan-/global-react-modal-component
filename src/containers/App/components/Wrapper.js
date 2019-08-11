import React from 'react';
import * as TYPES from 'prop-types';

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
  darkerBackgroundColor: TYPES.bool.isRequired,
};

function Wrapper({
  children,
  darkerBackgroundColor,
}) {
  return (
    <div className={ `app wrapper${ darkerBackgroundColor ? ' darker-background-color' : '' }` }>
      { children }
    </div>
  );
}

export default Wrapper;

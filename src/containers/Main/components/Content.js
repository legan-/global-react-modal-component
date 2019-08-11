import React from 'react';
import * as TYPES from 'prop-types';

Content.propTypes = {
  children: TYPES.node.isRequired
};

function Content({ children }) {
  return (
    <div className='content'>
      { children }
    </div>
  );
}

export default Content;

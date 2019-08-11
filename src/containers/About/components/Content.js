import React from 'react';
import * as TYPES from 'prop-types';
import Grid from '@material-ui/core/Grid';

Content.propTypes = {
  children: TYPES.node.isRequired,
  biggerFontSize: TYPES.bool.isRequired,
};

function Content({
  children,
  biggerFontSize,
}) {
  return (
    <div className={ `content${ biggerFontSize ? ' bigger-font-size' : '' }` }>
      <Grid
        container
        spacing={ 2 }
        justify='center'
      >
        <Grid
          item
          xs={ 10 }
          sm={ 8 }
          md={ 6 }
          lg={ 4 }
        >
          { children }
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
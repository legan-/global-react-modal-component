import React from 'react';
import * as TYPES from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

NavButton.propTypes = {
  children: TYPES.node.isRequired,
  linkTo: TYPES.string,
  pathname: TYPES.string,
  onClick: TYPES.func,
};

NavButton.defaultProps = {
  linkTo: '',
  pathname: '',
  onClick: () => {},
};

function NavButton({
  children,
  linkTo,
  pathname,
  onClick,
}) {

  return (
    <li>
      {
        linkTo.length || pathname.length ? (
          <Link to={ linkTo }>
            <Button color={ pathname === linkTo ? 'primary' : 'default' }>
              { children }
            </Button>
          </Link>
        ) : (
          <Button onClick={ onClick }>
            { children }            
          </Button>
        )
      }
    </li>
  );
}

export default NavButton;
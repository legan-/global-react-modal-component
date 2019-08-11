import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as TYPES from 'prop-types';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

Header.propTypes = {
  location: TYPES.object.isRequired
};

function Header({ location }) {

  const buttonProps = path => {
    return path === location.pathname ? ({
      color: 'primary',
    }) : ({
      color: 'default',
    });
  };

  return (
    <header className='container'>
      <ul>
        <li>
          <Link to='/'>
            <Button { ...buttonProps('/') }>
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <Button { ...buttonProps('/about') }>
              About
            </Button>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Button>
            <ExitToAppIcon />
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default withRouter(Header);

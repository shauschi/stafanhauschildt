'use strict';
import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {viewPath} from "../utils/RamdaUtils";

class _NavButton extends Component {

  render() {
    const {history, location, path, children} = this.props;
    const animate = viewPath(['state', 'from'], location) === 'welcome';
    const active = location.pathname === path;
    return (
      <span className={classNames(animate ? 'nav-button-animate' : undefined, 'nav-button')}>
        <Button
          color={active ? 'secondary' : 'inherit'}
          onClick={() => history.push(path)}>
          {children}
        </Button>
      </span>
    );
  }
}
const NavButton = withRouter(_NavButton);

class _MyAppBar extends Component {

  render() {
    const {location} = this.props;
    const animate = viewPath(['state', 'from'], location) === 'welcome';
    const className = classNames(animate ? 'appbar2-animate' : undefined, 'appbar2');
    return (
      <AppBar position='sticky' color='primary' className={className}>
        <Toolbar style={{justifyContent: 'flex-end'}}>
          <NavButton path='/home'>
            Über mich
          </NavButton>
          <NavButton path='/projects'>
            Projekte
          </NavButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(_MyAppBar);
import React, {Component} from 'react';
import compose from 'recompose/compose';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import withRouter from 'react-router-dom/withRouter';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import OriginalCSSTransition from 'react-transition-group/CSSTransition';
import * as Style from './style/';
import './style/style.less';
import moment from 'moment';
import deLocale from 'moment/locale/de';

import {Welcome, Main, ProjectDetails} from './pages';

moment.updateLocale('de', deLocale);

class CSSTransition extends OriginalCSSTransition {
  onEntered = () => {
    // Do not remove enter classes when active
  }
}

class App extends Component {

  render() {
    const {location} = this.props;
    const modal = location.state && location.state.to === 'modal';

    let pos = {};
    if (modal) {
      pos = location.state.from;
    }

    let key = location.pathname;
    if (key !== '/welcome') {
      key = '/main';
    }

    return (
      <MuiThemeProvider theme={Style.APP_THEME}>
        <TransitionGroup>
          <CSSTransition
            timeout={850}
            classNames='modal'
            key={key}
            mountOnEnter
            unmountOnExit
            appear
          >
            <Switch location={location}>
              <Redirect exact path='/' to='/welcome'/>
              <Route exact path='/welcome' component={Welcome}/>
              <Route component={Main}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup>
          <CSSTransition
            timeout={850}
            classNames='modal'
            key={location.pathname}
            mountOnEnter
            unmountOnExit
            appear
          >
            <Switch location={location}>
              <Route exact path='/projects/:id'
                     render={props => <ProjectDetails style={pos} {...props}/>}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </MuiThemeProvider>
    )
  }
}

export default compose(
  withRouter,
)(App);
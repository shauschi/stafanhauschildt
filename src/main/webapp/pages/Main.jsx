'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import {Footer} from './../container';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import withRouter from 'react-router-dom/withRouter';
import {Home, Projects} from '.';
import './../style/style.less';
import {MyAppBar} from '../container';

class Welcome extends Component {

  render() {
    const {location} = this.props;
    return (
      <div style={{position: 'absolute', top: '0', left: '0', width: '100%', backgroundColor: '#FAFAFA'}}>
        <MyAppBar/>

        <main>
          <Switch location={location}>
            <Route path="/home" render={(props) => <Home  {...props}/>}/>
            <Route path="/projects" render={(props) => <Projects {...props}/>}/>
          </Switch>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default compose(
  withRouter,
)(Welcome);
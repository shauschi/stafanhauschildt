'use strict';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import {SocialLinks} from './../container';
import Typed from 'react-typed';
import './../style/style.less';

class Welcome extends Component {

  goToHome = () => {
    const {history} = this.props;
    history.push({
      pathname: `/home`,
      state: {
        from: 'welcome',
      },
    });
  };

  render() {
    return (
      <div className='page'>
        <AppBar className='appbar'>
          <div
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'absolute'}}>
            <div>
              <span className='container-title' style={{position: 'relative', color: 'rgba(0,0,0,0)'}}>
                Hallo! Ich bin Stefan.

              <span className='container-title' style={{position: 'absolute', top: '0px', left: '0px', fontSize: '1em'}}>
                <Typed
                  strings={[
                    'Hallo! Ich bin Stefan.',
                  ]}
                  smartBackspace={true}
                  showCursor={false}
                  typeSpeed={75}
                  startDelay={300}
                />
              </span>
              </span>
              <span className='container-title-more'>
                <Button
                  onClick={this.goToHome}
                  color='secondary'
                  variant='outlined'>
                    erfahre mehr
                </Button>
              </span>
            </div>
          </div>
          <div className='welcome-social'>
            <SocialLinks color='rgba(255, 255, 255, 0.87)'/>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default Welcome;
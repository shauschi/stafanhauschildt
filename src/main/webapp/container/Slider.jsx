'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import SwipeableViews from 'react-swipeable-views';
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
import virtualize from 'react-swipeable-views-utils/lib/virtualize';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const EnhancedSwipeableViews = virtualize(autoPlay(SwipeableViews));

const sliderStyles = () => ({
  container: {
    position: 'relative'
  },
  stepper: {
    background: 'none',
    height: '38px',
    justifyContent: 'center',
    padding: '0'
  },
});

class Slider extends Component {

  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({index: index});
  };

  handleNext = () => {
    this.setState({index: this.state.index + 1});
  };

  handleBack = () => {
    this.setState({index: this.state.index + 1});
  };

  slideRenderer = ({key, index}) => {
    const {children} = this.props;
    return (
      <div key={index}>
        {children[index % children.length]}
      </div>
    );
  };

  render()
  {
    const {classes, children} = this.props;
    const {index} = this.state;

    return (
      <div className={classes.container}>
        <EnhancedSwipeableViews
          disableLazyLoading={false}
          slideRenderer={this.slideRenderer}
          index={index}
          interval={7500}
          springConfig={{duration: '1.85s', easeFunction: 'cubic-bezier(0.23, 1, 0.32, 1)', delay: '0s', tension: 300, friction: 30}}
          onChangeIndex={this.handleChangeIndex}/>

        <div>
          <MobileStepper
            type="dots"
            steps={children.length}
            activeStep={index % children.length}
            position="static"
            className={classes.stepper}
            nextButton={
              <Button color='primary' onClick={this.handleNext}>
                <KeyboardArrowRight/>
              </Button>
            }
            backButton={
              <Button color='primary' onClick={this.handleBack}>
                <KeyboardArrowLeft/>
              </Button>
            }
          />
        </div>
      </div>
    );
  };
}

export default compose(
  withStyles(sliderStyles)
)(Slider);
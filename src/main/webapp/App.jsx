import React, {Component} from 'react';
import {connect} from 'react-redux'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import MyComponent from "./MyComponent";

import init from './model/init.js'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue, // Purple and green play nicely together.
    secondary: green,
    error: red,
  }
});

class App extends Component {
  componentDidMount()
  {
    const {dispatch} = this.props
    init(dispatch)
  }

  render()
  {
    return (
      <MuiThemeProvider theme={theme}>
        <MyComponent {...this.props}/>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  jobs: state.job.list
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
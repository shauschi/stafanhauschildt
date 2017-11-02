import React, {Component} from 'react';
import MyAppBar from './container/MyAppBar.jsx';
import Typography from 'material-ui/Typography';
import {JobCard} from './components/job';
import Grid from 'material-ui/Grid';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemText} from 'material-ui/List';

class MyComponent extends Component {

  render() {
    return (
      <div>
        <MyAppBar/>
        <Grid container gutter={24} justify="center" style={{marginTop: "72px"}}>
          {
            this.props.jobs.map((job, idx) => (
              <Grid item xs={12} sm={3} key={idx}>
                <JobCard {...job}/>
              </Grid>
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default MyComponent;
import React, {Component} from 'react';
import MyAppBar from './container/MyAppBar.jsx';
import Typography from 'material-ui/Typography';
import Card, {CardHeader, CardMedia, CardContent} from 'material-ui/Card';
import {JobCard} from './components/job';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemText} from 'material-ui/List';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      jobs: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/users')
      .then(response => {
        if (response.status === 200) {
          const data = response.json();
          data.then(users => this.setState(Object.assign({}, this.state, {error: false, users: users})));
          return;
        }
      });
    this.setState(Object.assign({}, this.state, {error: true, users: []}));
  }

  render() {
    let child = null;
    if (this.state.error) {
      child = (<Typography color="error">An error occured</Typography>);
    } else {
      child = (<List>
        <ListSubheader disableSticky>Here are some users:</ListSubheader>
        {
          this.state.users.map((user, idx) => (
            <ListItem key={idx} button>
              <ListItemText primary={user.vorname + " " + user.nachname}/>
            </ListItem>
          ))
        }
      </List>);
    }

    return (
      <div>
        <MyAppBar/>
        <Grid container gutter={24} justify="center" style={{marginTop: "72px"}}>
          <Grid item xs={10}>
            {child}
          </Grid>
          {
            this.props.jobs.map((job, idx) => (
              <Grid item xs={10} key={idx}>
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
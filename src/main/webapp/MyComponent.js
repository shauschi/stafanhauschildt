import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemText} from 'material-ui/List';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      users: []
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
        <ListSubheader>Here are some users:</ListSubheader>
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
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Hello World
            </Typography>
          </Toolbar>
        </AppBar>
        {child}
      </div>
    );
  }
}

export default MyComponent;
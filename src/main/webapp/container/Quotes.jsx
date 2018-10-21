'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import {Slider} from '.';

const quotes = [
  {
    name: 'Melwin M.',
    role: 'Projektleiter',
    company: 'Bornholdt Lee GmbH',
    text: 'Die Zusammenarbeit mit Stefan war "wie auf Wolke 7!"',
  },
  {
    name: 'Jens L.',
    role: 'Scrum Master',
    company: 'Berenberg Bank',
    text: '...',
  },
  {
    name: 'Michael S.',
    role: 'Entwickler',
    company: 'pdv financial software GmbH',
    text: '...',
  },
  {
    name: 'Austin W.',
    role: 'Customer Supprt',
    company: 'Serisys, Bankok',
    text: '...',
  },
];

const styles = () => ({
  container: {
    margin: '0 auto',
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  quote: {
    display: 'flex',
    justifyContent: 'center',
  }
});

class _Quote extends Component {
  render() {
    const {quote, classes} = this.props;
    const {name, role, company, text} = quote;
    return (
      <div className={classes.quote}>
        <div>
          <Typography variant='title' color='textSecondary' gutterBottom>"{text}"</Typography>
          <Typography color='textSecondary'>{name}</Typography>
          <Typography variant='caption'>{role}, {company}</Typography>
        </div>
      </div>
    );
  }
}
const Quote = compose(
  withStyles(styles)
)(_Quote);

class _Quotes extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Slider>
          {quotes.map((quote, idx) => <Quote key={idx} quote={quote}/>)}
        </Slider>
      </div>
    );
  }
}
const Quotes = compose(
  withStyles(styles)
)(_Quotes);

export default Quotes;
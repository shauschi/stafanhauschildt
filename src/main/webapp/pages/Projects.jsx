'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import moment from 'moment';
import deLocale from 'moment/locale/de';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import './../style/style.less';
import Fuse from 'fuse.js';
import {setPath, togglePath} from "../utils/RamdaUtils";
import withRouter from 'react-router-dom/withRouter';
import TextField from "@material-ui/core/TextField";
import {jobs} from './../service/job';

moment.locale("de-de", deLocale);
moment.updateLocale("de", deLocale);

class BatchedButton extends Component {

  render() {
    const {selected, label, onClick, badgeContent} = this.props;
    const button = <Button
      variant={selected ? 'raised' : 'outlined'}
      size='small'
      onClick={onClick}
      color={selected ? 'secondary' : 'primary'}>
      {label}
    </Button>;

    if (selected) {
      return button;
    }
    return (
      <Badge
        badgeContent={badgeContent}
        color='secondary'>
        {button}
      </Badge>
    );
  }
}

  const duration = (start, end) => {
    const duration = moment.duration(moment(end).add(1, 'days').diff(moment(start)));
    const years = duration.years();
    let result = [];
    if (years >= 1) {
      result.push(years + (years === 1 ? '\u00A0Jahr' : '\u00A0Jahre')); // \u00A0 is &nbsp; what is a non-breaking space
    }
    const months = duration.months();
    if (months >= 1) {
      result.push(months + (months === 1 ? '\u00A0Monat' : '\u00A0Monate')); // \u00A0 is &nbsp; what is a non-breaking space
    }
    return result.join(' ');
  };

class JobCard extends Component {

  elements = {};

  styleFromElement = e => {
    const {top, right, bottom, left, width, height} = e.getBoundingClientRect();
    return {top, right, bottom, left, width, height};
  };

  showJobDetails = () => {
    const {job, history, location} = this.props;
    const from = this.styleFromElement(this.elements.card);

    history.push({
      pathname: location.pathname + '/' + job.id,
      state: {
        to: 'modal',
        job: job,
        from: from,
      }
    });
  };

  render() {
    const {job} = this.props;
    return (
      <span ref={e => this.elements.card = e}>
        <Card style={{borderRadius: '6px', marginBottom: '8px'}}>
          <CardContent style={{marginTop: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant='subheading'>
                {job.position}
              </Typography>
              <div>
                <Typography variant='caption' align='right'>
                  {duration(job.start, job.end)}
                </Typography>
                <Typography variant='caption' align='right'>
                  {moment(job.start).format('MMM YYYY')} - {job.end ? moment(job.end).format('MMM YYYY') : 'heute'}
                </Typography>
              </div>
            </div>
            <a href={job.company.url} target='_blank' style={{textDecoration: 'none', display: 'inline-block'}}>
              <Tooltip title={'zur Homepage von ' + job.company.name} placement='top'>
                <Typography variant='headline' color='primary'>
                  {job.company.name}
                </Typography>
              </Tooltip>
            </a>

            <Typography>
              {job.teaser}
              <Button
                style={{float: 'right'}}
                color='secondary'
                onClick={this.showJobDetails}>
                erfahre mehr
              </Button>
            </Typography>
          </CardContent>
          <CardContent style={{justifyContent: 'flex-start', clear: 'both'}}>
            {
              job.topTags.map((tag, idx) =>
                <Chip key={idx} variant='outlined' label={tag} style={{marginRight: '8px'}}/>
              )
            }
          </CardContent>
        </Card>
      </span>
    )
  }
}

class Projects extends Component {

  state = {
    filter: {
      search: '',
      java: false,
      spring: false,
      react: false,
      js: false,
      agile: false,
    },
  };

  setSearch = event => {
    this.setState(setPath(['filter', 'search'], event.target.value, this.state));
  };

  toggleFilter = id => {
    this.setState(togglePath(['filter', id], this.state));
  };

  render() {
    const {
      filter,
    } = this.state;
    const {search} = filter;

    const options = {
      shouldSort: false,
      tokenize: true,
      threshold: 0.2,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'topTags',
        'tags.label',
        'tags.tags.name',
      ]
    };

    const {history, location} = this.props;
    const dataFilter = {
      java: data => {
        const fuse = new Fuse(data, options);
        return fuse.search('java');
      },
      react: data => {
        const fuse = new Fuse(data, options);
        return fuse.search('react');
      },
      spring: data => {
        const fuse = new Fuse(data, options);
        return fuse.search('spring');
      },
      agile: data => {
        const fuse = new Fuse(data, options);
        return fuse.search('agile scrum');
      },
      search: data => {
        if (search === '') {
          return data;
        }
        const fuse = new Fuse(data, options);
        return fuse.search(search);
      }
    };

    let filtered = jobs;
    for (const f in dataFilter) {
      if (filter[f]) {
        filtered = dataFilter[f](filtered);
      }
    }

    const possibleData = {};
    for (const f in dataFilter) {
      possibleData[f] = [];
      if (!filter[f]) {
        possibleData[f] = dataFilter[f](filtered);
      }
    }


    return (
      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '24px'}}>
        <Grid
          container gutter={24} spacing={16} justify='flex-start' alignItems='flex-start'
          style={{height: '100%'}}>
          <Grid item xs={12}>
            <Typography variant='title' color='textSecondary' gutterBottom>
              Projekte
            </Typography>
            <Typography gutterBottom>
              Mein Schwerpunkt bei der Entwicklung liegt bei Java. Zumindest bisher.
              Ich habe große Freude an der Entdeckung neuer Technologien und Herausforderungen.
              So kam in den letzten Jahren auch immer mehr JavaScript dazu, ich habe mit
              Dokumentendatenbanken gearbeitet, Microservices erstellt und verschiedene
              Message Queues kennengelernt.
            </Typography>
            <Typography>
              Schaue Dir hier meine letzten Projekte an und mach Dir ein Bild von meinen
              Erfahrungen. Nutze dabei gerne die Filter, um z.B. nach Technologien oder Frameworks zu suchen:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='search'
              label='Suche'
              value={search}
              onChange={this.setSearch}
              type='search'
            />
          </Grid>
          <Grid item>
            <BatchedButton
              id='java'
              label='Java'
              selected={filter.java}
              onClick={() => this.toggleFilter('java')}
              badgeContent={possibleData.java.length}/>
          </Grid>
          <Grid item>
            <BatchedButton
              id='spring'
              label='Spring Framework'
              selected={filter.spring}
              onClick={() => this.toggleFilter('spring')}
              badgeContent={possibleData.spring.length}/>
          </Grid>
          <Grid item>
            <BatchedButton
              id='react'
              label='React'
              selected={filter.react}
              onClick={() => this.toggleFilter('react')}
              badgeContent={possibleData.react.length}/>
          </Grid>
          <Grid item>
            <BatchedButton
              id='agile'
              label='Agile Projekte'
              selected={filter.agile}
              onClick={() => this.toggleFilter('agile')}
              badgeContent={possibleData.agile.length}/>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container gutter={24} spacing={16} justify='flex-start' alignItems='flex-start'
              style={{height: '100%'}}>

              {
                filtered.map((job, idx) => (
                  <Grid key={idx} item sm={6} md={4}>
                    <JobCard job={job} history={history} location={location}/>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withRouter,
)(Projects);
'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import Event from '@material-ui/icons/Event';
import Ballot from '@material-ui/icons/Ballot';
import People from '@material-ui/icons/People';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import Person from '@material-ui/icons/Person';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import LocationCity from '@material-ui/icons/LocationCity';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withRouter from 'react-router-dom/withRouter';
import Fuse from 'fuse.js';
import moment from 'moment';
import deLocale from 'moment/locale/de';
import {SECONDARY} from './../style';
import {viewPath, setPath} from './../utils/RamdaUtils';
import {IconJava, IconReact, IconDocker, IconBitbucket, IconIntellij} from './../icons';
import './../style/style.less';

moment.locale('de-de', deLocale);
moment.updateLocale('de', deLocale);

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

const WithIcon = ({icon, tooltip, children}) => (
  <div style={{display: 'flex', alignItem: 'center'}}>
    <Tooltip title={tooltip}>
      <IconButton>
        {icon}
      </IconButton>
    </Tooltip>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div>
        {children}
      </div>
    </div>
  </div>
);

const TagAvatar = ({icon}) => {
  let i = undefined;
  if (icon === 'java') {
    i = <IconJava/>
  } else if (icon === 'react') {
    i = <IconReact/>
  } else if (icon === 'docker') {
    i = <IconDocker/>
  } else if (icon === 'bitbucket') {
    i = <IconBitbucket/>
  } else if (icon === 'intellij') {
    i = <IconIntellij/>
  }
  if (i) {
    return (
      <Avatar style={{backgroundColor: 'unset', marginRight: '-16px'}}>
        {i}
      </Avatar>
    );
  }
  return <span/>;
};

const toTooltip = value => {
  if (value >= 9) {
    return 'Expertenwissen';
  } else if (value >= 7) {
    return 'Sehr gute Kenntnisse';
  } else if (value >= 5) {
    return 'Gute Kenntnisse';
  } else if (value >= 3) {
    return 'Kenntnisse';
  } else if (value >= 1) {
    return 'Grundkenntnisse/Berührungspunkte';
  }
  return 'Keine Kenntnisse, wurde aber im Projekt eingesetzt';
};

const toStar = (value, minValueHalfStar, minValueFullStar) => {
  if (value > minValueFullStar) {
    return <Star style={{color: SECONDARY, fontSize: '16px'}}/>;
  }
  if (value > minValueHalfStar) {
    return <StarHalf style={{color: SECONDARY, fontSize: '16px'}}/>;
  }
  return <StarBorder style={{color: 'rgba(120, 120, 120, 0.54)', fontSize: '16px'}}/>;
};

const Stars = ({value}) => (
  <Tooltip title={toTooltip(value)}>
    <div>
      {toStar(value, 0, 1)}
      {toStar(value, 2, 3)}
      {toStar(value, 4, 5)}
      {toStar(value, 6, 7)}
      {toStar(value, 8, 9)}
    </div>
  </Tooltip>
);

const Tag = (tag, idx) => (
  <Grid key={idx} item xs={6} sm={3} md={2}>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Chip label={tag.name} variant='outlined' avatar={<TagAvatar icon={tag.icon}/>}/>
      <Stars value={tag.level}/>
      <Typography variant='caption' align='center' style={{position: 'relative', top: '-6px'}}>
        {tag.version}
      </Typography>
    </div>
  </Grid>
);

class ProjectDetails extends Component {

  state = {
    search: '',
  };

  setSearch = event => {
    this.setState(setPath(['search'], event.target.value, this.state));
  };

  groupCard = (group, idx) => {

    return (
      <div key={idx} style={{marginBottom: '16px'}}>
        <Grid container gutter={24} spacing={16}>
          <Grid item xs={12}>
            <Typography variant='caption' align='center'>
              {group.name}
            </Typography>
          </Grid>
          {
            group.tags.map(Tag)
          }
        </Grid>
      </div>
    )
  };

  render() {
    const {search} = this.state;
    const {location} = this.props;

    const job = location.state.job;
    const tags = job.tags;

    let filtered = [];
    if (search === '') {
      filtered = tags;
    } else {
      const options = {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          'name',
        ]
      };

      for (const idx in tags) {
        const data = tags[idx].tags;
        const fuse = new Fuse(data, options);
        const f = fuse.search(search);
        if (f.length > 0) {
          filtered[idx] = {
            name: tags[idx].name,
            tags: f
          }
        }
      }
    }

    return (
      <div>
      <div className='project-details'>
        <AppBar position='sticky' color='primary'>
          <Toolbar>
            <div className='icon-back'>
              <IconButton onClick={this.props.history.goBack} color='inherit'>
                <ArrowBack/>
              </IconButton>
            </div>
            <div className='label-back'>
              <Button className='icon' onClick={this.props.history.goBack} color='inherit' style={{paddingLeft: '0px'}}>
                zurück
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '24px'}}>
          <Grid
            container gutter={24} spacing={16}
            style={{height: '100%'}}>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader title='Überblick'/>
                <CardContent>
                  <Grid container gutter={24} spacing={0}>
                    <Grid item xs={12}>
                      <WithIcon icon={<Person/>} tooltip='Position'>
                        <Typography>
                          {job.position}
                        </Typography>
                      </WithIcon>
                    </Grid>

                    <Grid item xs={12}>
                      <WithIcon icon={<BusinessCenter/>} tooltip='Auftraggeber'>
                        <Typography>
                          {viewPath(['company', 'name'], job)}
                        </Typography>
                        <Typography variant='caption'>
                          {viewPath(['company', 'branche'], job)}
                        </Typography>
                      </WithIcon>
                    </Grid>

                    <Grid item xs={12}>
                      <WithIcon icon={<LocationCity/>} tooltip='Ort'>
                        <Typography>
                          {viewPath(['company', 'address', 'city'], job)}
                        </Typography>
                        <Typography variant='caption'>
                          {viewPath(['company', 'address', 'street'], job)} {viewPath(['company', 'address', 'nr'], job)}
                        </Typography>
                      </WithIcon>
                    </Grid>

                    <Grid item xs={12}>
                      <WithIcon icon={<Event/>} tooltip='Projektdauer'>
                        <Typography>
                          {duration(job.start, job.end)}
                        </Typography>
                        <Typography variant='caption'>
                          {moment(job.start).format('MMMM YYYY')} - {job.end ? moment(job.end).format('MMMM YYYY') : 'heute'}
                        </Typography>
                      </WithIcon>
                    </Grid>

                    {
                      job.method
                        ? <Grid item xs={12} md={6}>
                          <WithIcon icon={<Ballot/>} tooltip='Arbeitsweise'>
                            <Typography>
                              {job.method}
                            </Typography>
                          </WithIcon>
                        </Grid>
                        : undefined
                    }

                    <Grid item xs={12} md={6}>
                      <WithIcon icon={<People/>} tooltip='Team'>
                        <Typography>
                          {job.team}
                        </Typography>
                      </WithIcon>
                    </Grid>
                  </Grid>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader title='Projektinhalt'/>
                <CardContent>
                  {
                    job.description.map((d, idx) => <Typography key={idx} gutterBottom>{d}</Typography>)
                  }
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardHeader title='Technologie-Stack'
                            subheader='Eine Übersicht der verwendeten Technologien, Techniken und Tools'/>
                <CardContent>
                  <div style={{marginTop: '-24px', marginBottom: '24px'}}>
                    <TextField
                      id='search'
                      label='Suche'
                      value={search}
                      onChange={this.setSearch}
                      type='search'
                    />
                  </div>
                  {
                    filtered.map((g, idx) => this.groupCard(g, idx))
                  }
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </div>
      </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
)(ProjectDetails);
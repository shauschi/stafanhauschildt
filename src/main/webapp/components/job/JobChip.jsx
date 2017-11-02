import React from 'react';
import Chip from 'material-ui/Chip';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const color = {
  tech: blue.A200,
  soft: green.A200,
  tools: red.A200,
};

const JobChip = ({label, cat}) => {
  return (<Chip label={label} style={{height: '24px', margin: '3px', backgroundColor: color[cat]}}/>);
};

export default JobChip;

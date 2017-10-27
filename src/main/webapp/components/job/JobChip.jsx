import React from 'react'
import Chip from 'material-ui/Chip'
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const color = {
  tech: blue.A200,
  soft: green.A200,
  tools: red.A200,
}

const JobChip = ({label, cat}) => {
  console.warn(cat, color[cat]);
  return (<Chip label={label} style={{margin: "6px", backgroundColor: color[cat]}}/>)
}

export default JobChip

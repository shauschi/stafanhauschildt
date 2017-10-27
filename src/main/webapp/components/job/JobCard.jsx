import React from 'react';
import Card, {CardHeader, CardMedia, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import JobChip from './JobChip.jsx';

const JobCard = ({position, company, description, tags}) => (
  <Card>
    <CardHeader
      title={position}
      subheader={
        <a href={company.url} target="_blank" rel="noopener noreferrer">
          {company.name}
        </a>
      }
    />
    <CardMedia>
      <img width={"100%"} src={company.img} alt="Behörde" />
    </CardMedia>
    <CardContent>
      {
        description.map((text, idx) => (
          <Typography key={idx}>{text}</Typography>
        ))
      }
      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        {
          tags.map((tag, idx) => (
            <JobChip key={idx} label={tag.label} cat={tag.cat}/>
          )
        )}
      </div>
    </CardContent>
  </Card>
);

export default JobCard

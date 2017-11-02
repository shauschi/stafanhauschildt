import React from 'react';
import Card, {CardHeader, CardMedia, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import JobChip from './JobChip.jsx';
import moment from 'moment';

moment.locale('de');

const JobCard = ({position, start, end, company, description, tags}) => {

  let startFormatted = start ? moment(start, 'YYYY-MM-DD').format('MMM YYYY') : '???';
  let endFormatted;
  if (end) {
    if (end === 'heute') {
      endFormatted = end;
    } else {
      endFormatted = moment(end, 'YYYY-MM-DD').format('MMM YYYY');
    }
  }

  return (
    <Card>
      <CardHeader
        title={position}
        subheader={
          <a href={company.url} target="_blank" rel="noopener noreferrer">
            {company.name}
          </a>
        }
      />

      <span>{startFormatted} - {endFormatted}</span>

      <CardMedia>
        <img width={"100%"} src={company.img} alt="company logo"/>
      </CardMedia>
      <CardContent>
        {
          description.map((text, idx) => (
            <Typography key={idx}>{text}</Typography>
          ))
        }
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          {
            tags.map((tag, idx) => (
                <JobChip key={idx} label={tag.label} cat={tag.cat}/>
              )
            )}
        </div>
      </CardContent>
    </Card>
  );
}

export default JobCard

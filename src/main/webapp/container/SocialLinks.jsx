'use strict';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from "@material-ui/core/Tooltip";
import Xing from "mdi-material-ui/Xing";
import Instagram from "mdi-material-ui/Instagram";
import Github from "mdi-material-ui/GithubCircle";
import Linkedin from "mdi-material-ui/Linkedin";
import Facebook from "mdi-material-ui/Facebook";

const social = [
  {
    name: 'Xing',
    href: 'https://www.xing.com/profile/Stefan_Hauschildt5',
    icon: Xing,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_shauschi/',
    icon: Instagram,
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/shauschi/',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'http://www.linkedin.com/pub/stefan-hauschildt/28/819/2a2',
    icon: Linkedin,
  },
  {
    name: 'Facebook',
    href: 'http://www.facebook.com/stefan.hauschildt89',
    icon: Facebook,
  },
];

class SocialLink extends Component {
  render() {
    const {data, color} = this.props;
    const {name, href, icon} = data;
    return (
      <Tooltip title={name} placement='top'>
        <a target='_blank' href={href}>
          <IconButton style={{color: color}}>
            {icon()}
          </IconButton>
        </a>
      </Tooltip>
    );
  }
}

class SocialLinks extends Component {

  render() {
    const {color} = this.props;
    return (
      <div>
        <div>
          {social.map((s, idx) => <SocialLink key={idx} data={s} color={color}/>)}
        </div>
        <div>
          <a href='mailto:moin@stefan-hauschildt.de' style={{textDecoration: 'none'}}>
            <Typography style={{color: color }} align='center'>
              moin@stefan-hauschildt.de
            </Typography>
          </a>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
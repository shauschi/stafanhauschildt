'use strict';
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import SocialLinks from './SocialLinks.jsx';

class Footer extends Component {

  render() {
    return (
      <Grid container gutter={16} justify='center' className='footer'>
        <Grid item xs={12} sm={10} md={8}>
          <Grid container gutter={16} justify='space-around'>
            <Grid item xs={12} className='footer_item'>
              <Typography variant='caption'>mehr von mir</Typography>
            </Grid>
            <Grid item xs={12} className='footer_item'>
              <SocialLinks/>
            </Grid>
            <Grid item xs={12} style={{marginTop: '48px'}}>
              <Typography variant='subheading' gutterBottom>Impressum</Typography>
              <Typography gutterBottom>
                Angaben gemäß §5 TMG:
              </Typography>
              <Typography gutterBottom variant='caption'>
                Stefan Hauschildt<br/>
                Softwareentwickler<br/>
                Eichelhäherkamp 2<br/>
                21224 Rosengarten
              </Typography>

              <Typography gutterBottom>
                Haftung für Links
              </Typography>
              <Typography gutterBottom variant='caption'>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </Typography>
              <Typography gutterBottom>
                Kontakt
              </Typography>
              <Typography gutterBottom variant='caption'>
                Telefon: +49 176 10 41 91 02<br/>
                E-Mail: moin@stefan-hauschildt.de
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
'use strict';
import React, {Component} from 'react';
import compose from 'recompose/compose';
import {Link} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {SECONDARY} from './../style';
import './../style/style.less';

const avatarSize = 146;

const styles = theme => ({
  heroUnit: {
    backgroundColor: 'lightgray',
  },
  heroAvatar: {
    width: '100%',
    height: avatarSize / 2 + 16,
    display: 'flex',
    justifyContent: 'center',
  },
  heroContent: {
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    top: 16,
    borderColor: '#fafafa',
    borderStyle: 'solid',
    borderWidth: 6,
  },
});

const getBgImage = width => {
  if (width === 'xs') {
    return 'stefan_600.jpg';
  } else if (width === 'sm') {
    return 'stefan_960.jpg';
  } else if (width === 'md') {
    return 'stefan_1280.jpg';
  }
  return 'stefan_1920.jpg';
};

class Welcome extends Component {

  goToRecipe = () => {
    const {element} = this;
    const {history} = this.props;
    const {top, right, bottom, left, width, height} = element.getBoundingClientRect();
    const titleElement = this.titleElement.getBoundingClientRect();

    history.push({
      pathname: `/foo`,
      state: {
        to: 'modal',
        meta: {
          from: {top, right, bottom, left, width, height},
          title: {
            top: titleElement.top, right: titleElement.right, bottom: titleElement.bottom,
            left: titleElement.left, width: titleElement.width, height: titleElement.height
          }
        },
      },
    });
  };

  render() {
    const {width, classes} = this.props;
    const img = getBgImage(width);
    return (
      <div>
        <div style={{
          backgroundImage: 'url(/' + img + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          backgroundSize: 'cover',
          height: '0',
          paddingTop: width === 'xs' ? '100%' : 900/16 + '%',
          position: 'relative',
        }}>
          <a className='thats-me'>
            that's] me
          </a>
        </div>
        <div>
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography variant='display2' align='center' gutterBottom>
                Moin Moin
              </Typography>
              <Typography variant='title' align='center' color='textSecondary' paragraph>
                Mein Name ist Stefan Hauschildt und ich bin Softwareentwickler.
                Es freut mich, dass Du den Weg auf meine Seite gefunden hast.
                Du findest hier viele Informationen über meine bisherigen Projekte und Erfahrungen.
              </Typography>
              <Typography variant='title' align='center' color='textSecondary' paragraph>
                Für Projektanfragen schreib' mir doch gerne
                eine <a href='mailto:moin@stefan-hauschildt.de' style={{textDecoration: 'none', color: SECONDARY}}>Mail</a>.
              </Typography>

            </div>
          </div>
        </div>
        {/*<Quotes/>*/}
        <div style={{padding: '24px', margin: '0 auto', maxWidth: 800}}>
          <Grid container gutter={24} spacing={16}>
            <Grid item xs={12}>
              <Typography variant='title' color='textSecondary' gutterBottom>
                Softwareentwickler
              </Typography>
              <Typography>
                Die Begeisterung für den Computer teile ich seit meiner frühen Kindheit.
                Die Leidenschaft am Computer neue Software zu kreieren kam in der Oberstufe.
              </Typography>
              <Typography>
                Informatik und Datenverarbeitungstechnik lehrten mir die theoretischen Grundlagen,
                wie ein Computer funktioniert, über logische Schaltungen
                und von Assembler bis hin zur objektorientierten Programmierung in Java.
              </Typography>
              <Typography>
                An diese ersten Erfolge anknüpfend,
                habe ich mich für ein duales Studium der Wirtschaftsinformatik beworben
                und habe einen Platz an der Nordakademie Elmshorn in Zusammenarbeit mit der PPI AG in Hamburg
                bekommen.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='title' color='textSecondary' gutterBottom>
                Problemlöser
              </Typography>
              <Typography gutterBottom>
                Probleme sind Herausforderungen. Und ich liebe Herausforderungen.
              </Typography>
              <Typography>
                Als Entwickler hangelt man sich oft von einem Problem zum nächsten. Was mir dabei besonders viel
                Spaß bereitet ist das Lösen solcher Probleme mit meinen internen und externen Kolleginnen und
                Kollegen.
                Im Team (und mit etwas Hilfe von stackoverflow und google) gelingt es immer diese Herausforderungen
                zu meistern und man freut sich über die erreichten Lösungen. Dass dies ein großer Teil meiner
                Arbeit ist, gefällt mir sehr.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='title' color='textSecondary' gutterBottom>
                Teamplayer
              </Typography>
              <Typography gutterBottom>
                Ich mag Menschen und mit einem Team gemeinsam etwas schaffen. Das gilt beruflich, wie privat.
              </Typography>
              <Typography gutterBottom>
                Als Softwareentwickler verbringt man viele Stunden stehend oder sitzend am Schreibtisch oder im Büro.
                Darum ist es mir sehr wichtig mich in meiner Freizeit viel zu bewegen.
                Viele Jahre habe ich diesen Ausgleich beim Fußball gefunden, habe dort mit Freunden ein eigenes
                Team gegründet und war sogar eine Zeit lang Spielführer dieser großartigen Mannschaft.
              </Typography>
              <Typography>
                Als die Verletzungen jedoch zunahmen, musste ich mich umorientieren und nehme jetzt
                mehrmals wöchentlich an einem functional training in kleinen Gruppen teil. Die Workouts,
                die auch oft als Teamleistung gewertet werden, fordern mich und sorgen für einen super Ausgleich
                zu der Arbeit am Bildschirm.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='title' color='textSecondary' gutterBottom>
                Selbst und ständig
              </Typography>
              <Typography gutterBottom>
                Im sechsten Semester meines Studiums konnte ich leider
                die Prüfung in IT-gestützdem Rechnungswesen nicht bestehen
                und war somit gezwungen mich neu zu orientieren.
                Das war damals ein großer Schlag, aber wohl auch einer meiner wichtigsten Karriereschritte.
                Denn dies war der Schritt in die Selbstständigkeit. Ich habe damals mein erstes Projekt als
                freiberuflicher Softwareentwickler begonnen und denke inzwischen, dass mir gar nichts
                Besseres hätte passieren können.
              </Typography>
              <Typography>
                Ich genieße die Vorzüge von freier Zeiteinteilung und Selbstbestimmtheit.
                Immer neue Aufgaben und Technologien fordern mich und sorgen dafür,
                dass ich Spaß an meiner Tätigkeit habe.
              </Typography>
              <Typography>
                Meine bisherigen Projekte kannst Du Dir <Link to='/projects' style={{textDecoration: 'none', color: SECONDARY}}>hier</Link> ansehen.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default compose(
  withWidth(),
  withStyles(styles),
)(Welcome);
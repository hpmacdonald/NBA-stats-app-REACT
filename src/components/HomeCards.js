import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },

}));

export default function HomeCards() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <Container className='index--container'>
    <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
             Search All Current Players
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Individual Player Stats
          </Typography>
        </CardContent>
        <div className={classes.controls}>
         
   
            <Button variant="outlined" color="primary"><Link className='link--styles' to='/players'>view</Link></Button>
         
         
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://wemyr.files.wordpress.com/2011/12/derrick-rose-pic-getty-images-835672364.jpg"
        title="Live from space album cover"
      />
    </Card>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            View All Current Teams
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Team Statistics & Scores
          </Typography>
        </CardContent>
        <div className={classes.controls}>
  
            <Button variant="outlined" color="primary"><Link className='link--styles' to='/teamlist'>view</Link></Button>
    
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://clutchpoints.com/wp-content/uploads/2020/10/Ranking-the-top-25-NBA-Players-going-into-2021-Thumbnail.jpg"
        title="Live from space album cover"
      />
    </Card>

          </Paper>
        </Grid>
    </Grid>
    </Container>

  );
}
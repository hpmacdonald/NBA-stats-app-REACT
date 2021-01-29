import React from 'react'
import eastTeams from '../eastTeams'
import westTeams from '../westTeams'
import { Image } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Teams = () => {

    const classes = useStyles();

    return (
        <div>

<Container>
            <h2 className='center--title'>Eastern Conference</h2>
            <Grid container spacing={3}>
                
            {eastTeams.map(east => (
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}> 
          <CardMedia>
          <Image style={{ width: '200px' }} src={east.teamImage} />
          </CardMedia>
          <br></br>
          {east.teamName}
          <br></br>
          <br></br>
          <Button variant="outlined" color="secondary" >stats coming soon</Button>
          </Paper>
        </Grid>
        ))}  
      </Grid>
      </Container>
   

      <Container>
            <h2 className='center--title'>Western Conference</h2>
            <Grid container spacing={3}>
                
            {westTeams.map(west => (
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}> 
          <CardMedia>
          <Image style={{ width: '200px' }} src={west.teamImage} />
          </CardMedia>
          <br></br>
          {west.teamName}
          <br></br>
          <br></br>
          <Button variant="outlined" color="secondary" >view</Button>
          </Paper>
        </Grid>
        ))}  
      </Grid>
      </Container>
      
      

        </div>
    )
}

export default Teams

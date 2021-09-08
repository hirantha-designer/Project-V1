import React from 'react';
import {Paper,Grid,Container} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from "../components/Card/Card";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Container>
                
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="h2">
             Our Services
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card
            image="/image1.jpg"
            title="Project-1"
            topic="Service:1"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card
            image="/image2.jpg"
            title="Project-2"
            topic="Service:2"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card
            image="/image3.jpg"
            title="Project-3"
            topic="Service:3"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card
            image="/image4.jpg"
            title="Project-4"
            topic="Service:4"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Paper>
        </Grid>
        </Grid>
        </Container>
       
      </div>
    );
}

export default Home;
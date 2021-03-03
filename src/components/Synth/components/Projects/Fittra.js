import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Fittra extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="fittraimg"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Fitness Tracker: An app that trackers the user's exercises over time separated into two categories: Cardo and Resistance.  Enter your workout then view your work outs in a over time in the tracker
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://workout-tracker-17-nosql.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Workout_Tracker">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Fittra
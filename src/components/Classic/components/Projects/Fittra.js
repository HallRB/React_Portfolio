import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Fittra extends Component {
    render() {
        return(
<div id="cardwrap" shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="fittraimg"></img></CardTitle>
    <div class="projecttext">
        Fitness Tracker: An app that trackers the user's exercises over time separated into two categories: Cardo and Resistance.  Enter your workout then view your work outs in a over time in the tracker
</div>
    <div border>
    <a class="deployed" href="https://workout-tracker-17-nosql.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Workout_Tracker">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Fittra
import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"

class Fittra extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="fittraimg"></img></CardTitle>
    <div class="projecttext" >
        Fitness Tracker: An app that trackers the user's exercises over time separated into two categories: Cardo and Resistance.  Enter your workout then view your work outs in a over time in the tracker
    </div>
    <div border>
    <a class="deployed" href="https://workout-tracker-17-nosql.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Workout_Tracker">Github</a>
    </div>
</div>  
        )
    }
}
export default Fittra
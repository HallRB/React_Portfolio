import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Planner extends Component {
    render() {
        return(
<div id="cardwrap" shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="planner"></img></CardTitle>
    <div class="projecttext">
        Daily Planner: If your life is a mess and completely disorganized, this app is for you.  Enter in your plans for today and this app will keep track for your, letting you know when the time has past for a designated task.
</div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Day-Planner">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Planner
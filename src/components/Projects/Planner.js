import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Planner extends Component {
    render() {
        return(
<Card class="cardwrap cardbordermain" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="plannermain"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Daily Planner: If your life is a mess and completely disorganized, this app is for you.  Enter in your plans for today and this app will keep track for your, letting you know when the time has past for a designated task.
    </CardText>
    <CardActions border>
        <a class="github" href="https://github.com/HallRB/Day-Planner">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Planner
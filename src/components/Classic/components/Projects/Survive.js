import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';

class Survive extends Component {
    render() {
        return(
<Card id="cardwrap"  shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="survive"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Survive 2020: 2020 was a year of hell for most people. Celebrate getting through it by getting through this choose your own adventure minigame where actions can have untold consequences.  Make it to the end not infected to win.
    </CardText>
    <CardActions border>
        <a class="github" href="https://github.com/HallRB/Project-1">Github</a>
    </CardActions>
</Card>  
        )
    }
}
export default Survive
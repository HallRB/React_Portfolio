import React, { Component } from 'react';
import { CardTitle, CardActions } from 'react-mdl';

class Survive extends Component {
    render() {
        return(
<div id="cardwrapa"  shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="survive"></img></CardTitle>
    <div class="projecttext">
        Survive 2020: 2020 was a year of hell for most people. Celebrate getting through it by getting through this choose your own adventure minigame where actions can have untold consequences.  Make it to the end not infected to win.
</div>
    <CardActions border>
        <a id="github" href="https://github.com/HallRB/Project-1">Github</a>
    </CardActions>
</div>  
        )
    }
}
export default Survive
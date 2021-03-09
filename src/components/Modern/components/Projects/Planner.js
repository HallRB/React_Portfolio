import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Planner extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="planner"></img></CardTitle>
    <div class="projecttext" >
        Daily Planner: If your life is a mess and completely disorganized, this app is for you.  Enter in your plans for today and this app will keep track for your, letting you know when the time has past for a designated task.
    </div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Day-Planner">Github</a>
    </div>

</div>  
        )
    }
}
export default Planner
import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Survive extends Component {
    render() {
        return(
<div id="cardwrapb"  shadow={0} style={{width: '375px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="survive"></img></CardTitle>
    <div className="projecttext">
        Survive 2020: 2020 was a year of hell for most people. Celebrate getting through it by getting through this choose your own adventure minigame where actions can have untold consequences.  Make it to the end not infected to win.
    </div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Project-1">Github</a>
    </div>
</div>  
        )
    }
}
export default Survive
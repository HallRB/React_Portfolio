import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Budtra extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="budtraimg"></img></CardTitle>
<div className="projecttext">
        Budget Tracker: An app that allows the user to enter in income and expenses tracking them as they come in.  This application can be saved and utilized offline.
    </div>
    <div border>
    <a class="deployed" href="https://budget-tracker18pwa.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Budget_Tracker">Github</a>
    </div>
</div>  
        )
    }
}
export default Budtra
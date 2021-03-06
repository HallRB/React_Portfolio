import React, { Component } from 'react';
import { CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';

class Budtra extends Component {
    render() {
        return(
<div id="cardwrapa" shadow={0} style={{width: '800px', margin: 'auto'}}>
<CardTitle style={{height: '500px'}}><img alt="" id="budtraimg"></img></CardTitle>
<div class="projecttext">
        Budget Tracker: An app that allows the user to enter in income and expenses tracking them as they come in.  This application can be saved and utilized offline.
</div>
    <div id="borderclassic">
    <a id="deployed" href="https://budget-tracker18pwa.herokuapp.com/">Deployed Page</a>
        <a id="github" href="https://github.com/HallRB/Budget_Tracker">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Budtra
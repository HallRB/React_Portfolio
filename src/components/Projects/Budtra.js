import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Budtra extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="budtraimg"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Budget Tracker: An app that allows the user to enter in income and expenses tracking them as they come in.  This application can be saved and utilized offline.
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://budget-tracker18pwa.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Budget_Tracker">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Budtra
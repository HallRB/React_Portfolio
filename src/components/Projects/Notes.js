import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Notespage extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="notes"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Fitness Tracker: An app that trackers the user's exercises over time separated into two categories: Cardio and Resistance.  Enter your workout then view your work outs in a over time in the tracker
    </CardText>
    <CardActions border>
        <Button colored>Check it out!</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Notespage
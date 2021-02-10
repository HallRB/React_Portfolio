import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Sellify extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="sellify"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Budget Tracker: An app that allows the user to enter in income and expenses tracking them as they come in.  This application can be saved and utilized offline.
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
export default Sellify
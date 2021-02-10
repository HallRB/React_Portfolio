import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./Book.css"

class Arcade extends Component {
    render() {
        return(
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img class="book"></img></CardTitle>
    <CardText>
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
export default Arcade
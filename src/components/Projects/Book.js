import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./Book.css"

class Book extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="book"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Budget Tracker: An app that allows the user to enter in income and expenses tracking them as they come in.  This application can be saved and utilized offline.
    </CardText>
    <CardActions border>
        <Button colored>Check it out!</Button>
    </CardActions>
    <CardMenu>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Book
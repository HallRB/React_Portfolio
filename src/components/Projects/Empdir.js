import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Empdir extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="empdirimg"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Employee Directory: An app that allows the user to look up employees by name reacting with each letter entered.  User may also sort the results by first or last name.
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
export default Empdir
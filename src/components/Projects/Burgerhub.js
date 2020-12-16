import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./Burgerhub.css"

class Burgerhub extends Component {
    render() {
        return(
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img class="burgerhub"></img></CardTitle>
    <CardText>
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
export default Burgerhub
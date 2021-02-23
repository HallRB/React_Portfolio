import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Empdir extends Component {

    render() {
        return(
<Card id="cardwrap" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="empdirimg"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Employee Directory: An app that allows the user to look up employees by name reacting with each letter entered.  User may also sort the results by first or last name.
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://employeetracker20react.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Employee_Directory">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Empdir
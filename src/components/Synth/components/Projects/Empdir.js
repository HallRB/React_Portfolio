import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Empdir extends Component {

    render() {
        return(
<div id="cardwrap" shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="empdirimg"></img></CardTitle>
    <div class="projecttext">
        Employee Directory: An app that allows the user to look up employees by name reacting with each letter entered.  User may also sort the results by first or last name.
</div>
    <div border>
    <a class="deployed" href="https://employeetracker20react.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Employee_Directory">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Empdir
import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Empdir extends Component {

    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '375px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="empdirimg"></img></CardTitle>
    <div class="projecttext">
        Employee Directory: An app that allows the user to look up employees by name reacting with each letter entered.  User may also sort the results by first or last name.
    </div>
    <div border>
    <a class="deployed" href="https://employeetracker20react.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Employee_Directory">Github</a>
    </div>
</div>  
        )
    }
}
export default Empdir
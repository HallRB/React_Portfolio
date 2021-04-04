import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Burgerhub extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '375px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="burgerhub"></img></CardTitle>
    <div class="projecttext" >
       Burger Hub: A fun activity to create a juicy burger of your choice and devour it.
    </div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Burger-Hub">Github</a>
    </div>

</div>  
        )
    }
}
export default Burgerhub
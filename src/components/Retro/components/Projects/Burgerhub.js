import React, { Component } from 'react';
import { CardTitle, CardMenu, IconButton } from 'react-mdl';

class Burgerhub extends Component {
    render() {
        return(
<div id="cardwrap" shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="burgerhub"></img></CardTitle>
    <div class="projecttext">
       Burger Hub: A fun activity to create a juicy burger of your choice and devour it.
</div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Burger-Hub">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Burgerhub
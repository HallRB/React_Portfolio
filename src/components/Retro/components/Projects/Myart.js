import React, { Component } from 'react';
import { CardTitle, CardMenu, IconButton } from 'react-mdl';

class Myart extends Component {
    render() {
        return(
<div id="cardwrap"  shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="myartmain"></img></CardTitle>
    <div class="projecttext">
    Myart: Check out the world of fine and strange art
</div>
    <div border>
    <a class="deployed" href="https://reactportfoliohallrb.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/React_Portfolio">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Myart
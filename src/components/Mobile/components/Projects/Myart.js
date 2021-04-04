import React, { Component } from 'react';
import { CardTitle } from 'react-mdl'
import "./Book.css";

class Myart extends Component {
    render() {
        return(
<div id="cardwrapb"  shadow={0} style={{width: '375px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="myartmain"></img></CardTitle>
    <div class="projecttext" >
        Myart: Check out the world of fine and strange art
    </div>
    <div border>
    <a class="deployed" href="https://reactportfoliohallrb.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/React_Portfolio">Github</a>
    </div>
</div>
        )
    }
}
export default Myart
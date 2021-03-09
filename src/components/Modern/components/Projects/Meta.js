import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Meta extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="meta"></img></CardTitle>
    <div class="projecttext" >
        React Portfolio: You're already here!
    </div>
    <div border>
    <a class="deployed" href="https://reactportfoliohallrb.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/React_Portfolio">Github</a>
    </div>
</div>  
        )
    }
}
export default Meta
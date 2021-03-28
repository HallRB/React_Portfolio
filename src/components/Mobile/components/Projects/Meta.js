import React, { Component } from 'react';
import { CardTitle, CardMenu, IconButton } from 'react-mdl';

class Meta extends Component {
    render() {
        return(
<div id="cardwrapa"  shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="meta"></img></CardTitle>
    <div class="projecttext">
        React Portfolio: You're already here!
</div>
    <div border>
    <a id="deployed" href="https://reactportfoliohallrb.herokuapp.com/">Deployed Page</a>
        <a id="github" href="https://github.com/HallRB/React_Portfolio">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Meta
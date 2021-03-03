import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Meta extends Component {
    render() {
        return(
<Card class="cardwrap cardbordermain"  shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="metamain"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        React Portfolio: You're already here!
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://reactportfoliohallrb.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/React_Portfolio">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Meta
import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Myart extends Component {
    render() {
        return(
<Card id="cardwrapa"  shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="myartmain"></img></CardTitle>
    <CardText class=" cardtext" >
        Myart: Check out the world of fine and strange art
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
export default Myart
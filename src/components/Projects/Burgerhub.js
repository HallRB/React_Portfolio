import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Burgerhub extends Component {
    render() {
        return(
<Card class="cardwrapmain cardbordermain" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="burgerhubmain"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
       Burger Hub: A fun activity to create a juicy burger of your choice and devour it.
    </CardText>
    <CardActions border>
        <a class="github" href="https://github.com/HallRB/Burger-Hub">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Burgerhub
import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Burgerhub extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="burgerhub"></img></CardTitle>
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
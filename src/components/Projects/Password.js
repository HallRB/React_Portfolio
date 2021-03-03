import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Password extends Component {
    render() {
        return(
<Card class="cardwrap cardbordermain" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="passwordmain"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Random Password Generator:  Need a unique and complicated password to keep those pesky hackers from invading your online accounts.  Swing by and generate a password to your specifications.
    </CardText>
    <CardActions border>
        <a class="github" href="https://github.com/HallRB/Password-Generator">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Password
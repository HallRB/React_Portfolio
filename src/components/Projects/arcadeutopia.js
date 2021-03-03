import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
class Arcadea extends Component {
    render() {
        return(
<Card class="cardwrap cardbordermain" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="arcadeamain"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Arcade Utopia: An epic work in progress.  This game hopes to bring the user back to the age of retro styled RPGs with world exploration and turn based combat.  Design your character, level up, and defeat your enemies.
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://arcadeutopia.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/ArcadeUtopia">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Arcadea
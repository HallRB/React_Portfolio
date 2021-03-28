import React, { Component } from 'react';
import { CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';
import "./Book.css"

class Arcadea extends Component {
    render() {
        return(
<div id="cardwrapa" shadow={0} style={{width: '800px', margin: 'auto'}}>
<CardTitle style={{height: '500px'}}><img alt="" id="arcadea"></img></CardTitle>
<div class="projecttext">
        Arcade Utopia: An epic work in progress.  This game hopes to bring the user back to the age of retro styled RPGs with world exploration and turn based combat.  Design your character, level up, and defeat your enemies.
        </div>

    <CardActions border>
    <a id="deployed" href="https://arcadeutopia.herokuapp.com/">Deployed Page</a>
        <a id="github" href="https://github.com/HallRB/ArcadeUtopia">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Arcadea
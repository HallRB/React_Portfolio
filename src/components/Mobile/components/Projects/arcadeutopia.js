import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"

class Arcadea extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="arcadea"></img></CardTitle>
<div className="projecttext">
        Arcade Utopia: An epic work in progress.  This game hopes to bring the user back to the age of retro styled RPGs with world exploration and turn based combat.  Design your character, level up, and defeat your enemies.
    </div>
    <div border>
    <a class="deployed" href="https://arcadeutopia.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/ArcadeUtopia">Github</a>
    </div>

</div>  
        )
    }
}
export default Arcadea
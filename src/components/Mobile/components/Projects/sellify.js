import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"

class Sellify extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '375px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="sellify"></img></CardTitle>
    <div class="projecttext" >
        Sellify: Selling your home? Are you the homeowner, or perhaps the real estate agent?  Keeping the homeowner up to date with the status of their home where they can see offers and feedback left by prospective buyers.
    </div>
    <div border>
    <a class="deployed" href="https://wjrsellify.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/KKaraman/wickedJackrabbits">Github</a>
    </div>

</div>  
        )
    }
}
export default Sellify
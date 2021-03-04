import React, { Component } from 'react';
import { Card, CardTitle, CardMenu, IconButton } from 'react-mdl';
class Sellify extends Component {
    render() {
        return(
<Card id="cardwrapa" shadow={0} style={{width: '800px', margin: 'auto'}}>
<CardTitle style={{height: '500px'}}><img alt="" id="sellify"></img></CardTitle>
<div class="projecttext">
        Sellify: Selling your home? Are you the homeowner, or perhaps the real estate agent?  Keeping the homeowner up to date with the status of their home where they can see offers and feedback left by prospective buyers.
</div>
    <div border>
    <a id="deployed" href="https://wjrsellify.herokuapp.com/">Deployed Page</a>
        <a id="github" href="https://github.com/KKaraman/wickedJackrabbits">Github</a>
    </div>

</Card>  
        )
    }
}
export default Sellify
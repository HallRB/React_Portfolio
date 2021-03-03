import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
class Sellify extends Component {
    render() {
        return(
<Card class="cardwrap cardbordermain" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="sellifymain"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Sellify: Selling your home? Are you the homeowner, or perhaps the real estate agent?  Keeping the homeowner up to date with the status of their home where they can see offers and feedback left by prospective buyers.
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://wjrsellify.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/KKaraman/wickedJackrabbits">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Sellify
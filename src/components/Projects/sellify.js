import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Sellify extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="sellify"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Sellify: Selling your home? Are you the homeowner, or perhaps the real estate agent?  Keeping the homeowner up to date with the status of their home where they can see offers and feedback left by prospective buyers.
    </CardText>
    <CardActions border>
        <Button colored>Check it out!</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Sellify
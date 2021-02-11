import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./Book.css"

class Book extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
<CardTitle style={{height: '275px'}}><img alt="" class="book"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
       Book Search: Sign up, search a book and leave a comment for other's to view.  Add or delete your own comments and see what commentary others have left.
    </CardText>
    <CardActions border>
        <a href="www.google.com">Get Reading</a>
    </CardActions>
    <CardMenu>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Book
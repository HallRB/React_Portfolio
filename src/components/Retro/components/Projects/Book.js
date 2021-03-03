import React, { Component } from 'react';
import { CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';
import "./Book.css"

class Book extends Component {
    render() {
        return(
<div id="cardwrap" shadow={0} style={{width: '800px', margin: 'auto'}}>
<CardTitle style={{height: '500px'}}><img alt="" id="book"></img></CardTitle>
<div class="projecttext">
       Book Search: Sign up, search a book and leave a comment for other's to view.  Add or delete your own comments and see what commentary others have left.
</div>
    <CardActions border>
        <a id="deployed" href="https://booksearchgooglemern.herokuapp.com/">Deployed Page</a>
        <a id="github" href="https://github.com/HallRB/Booksearch">Github</a>
    </CardActions>
    <CardMenu>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Book
import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Notespage extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="notes"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
       Versapp: An LGBT supportive app which let's you create notes that you can later come back to and delete at your leasure.
    </CardText>
    <CardActions border>
        <a class="github" href="https://github.com/HallRB/Versapp">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Notespage
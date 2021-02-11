import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Horiseon extends Component {
    render() {
        return(
<Card class="cardwrap cardborder" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="horiseon"></img></CardTitle>
    <CardText class="cardwrap cardtext" >
        Horiseon: A basic html and CSS page demonstrating the use of what creating professional looking web sites can look like.
    </CardText>
    <CardActions border>
    <a class="deployed" href="https://booksearchgooglemern.herokuapp.com/">Deployed Page</a>
        <a class="github" href="https://github.com/HallRB/Booksearch">Github</a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>  
        )
    }
}
export default Horiseon
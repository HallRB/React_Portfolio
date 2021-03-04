import React, { Component } from 'react';
import { CardTitle, CardMenu, IconButton } from 'react-mdl';
import "./Book.css"
class Password extends Component {
    render() {
        return(
<div id="cardwrapa" shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="password"></img></CardTitle>
    <div class="projecttext">
       Random Password Generator:  Need a unique and complicated password to keep those pesky hackers from invading your online accounts.  Swing by and generate a password to your specifications.
</div>
    <div border>
        <a id="github" href="https://github.com/HallRB/Password-Generator">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Password
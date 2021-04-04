import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"
class Password extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '375px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="password"></img></CardTitle>
    <div class="projecttext" >
        Random Password Generator:  Need a unique and complicated password to keep those pesky hackers from invading your online accounts.  Swing by and generate a password to your specifications.
    </div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Password-Generator">Github</a>
    </div>
    </div>  
        )
    }
}
export default Password
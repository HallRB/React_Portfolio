import React, { Component } from 'react';
import { CardTitle } from 'react-mdl';
import "./Book.css"

class Notespage extends Component {
    render() {
        return(
<div id="cardwrapb" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{height: '275px'}}><img alt="" class="notes"></img></CardTitle>
    <div className="projecttext">
       Versapp: An LGBT supportive app which let's you create notes that you can later come back to and delete at your leasure.
    </div>
    <div border>
        <a class="github" href="https://github.com/HallRB/Versapp">Github</a>
    </div>
</div>  
        )
    }
}
export default Notespage
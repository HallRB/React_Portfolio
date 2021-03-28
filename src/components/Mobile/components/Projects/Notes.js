import React, { Component } from 'react';
import { CardTitle, CardMenu, IconButton } from 'react-mdl';


class Notespage extends Component {
    render() {
        return(
<div id="cardwrapa" shadow={0} style={{width: '800px', margin: 'auto'}}>
    <CardTitle style={{height: '500px'}}><img alt="" id="notes"></img></CardTitle>
    <div class="projecttext">
       Versapp: An LGBT supportive app which let's you create notes that you can later come back to and delete at your leasure.
</div>
    <div border>
        <a id="github" href="https://github.com/HallRB/Versapp">Github</a>
    </div>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</div>  
        )
    }
}
export default Notespage
import React, { Component } from 'react';
import "../App.css";
class Landingpage extends Component {
    render() {
    return(
     <div id="landingpagewrap">
         <div id="landingpageinnerwrap">

     <h2 id="cyve">Choose your viewing experience</h2>
     <div id="mobilewrap">
     <input type="submit" value="" id="mobver" className="viewexp"></input>
     </div>
     <input type="submit" value="Synthwave" id="synthwav" clasName="viewexp"></input>
     <div id="modern">
     <input type="submit" value="Modern" id="mod" className="viewexp"></input>
     </div>
     <input type="submit" value="Basic" id="bas" className="viewexp"></input>
     <input type="submit" value="Retro" id="retro" className="viewexp"></input>
     </div>
     </div>
    )
}
}

export default Landingpage
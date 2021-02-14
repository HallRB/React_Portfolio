import React, { Component } from 'react';
import "../App.css";
import Classic from "./Soundbites/classic.js";
import Mobile from "./Soundbites/mobile.js";
import Modern from "./Soundbites/modern.js";
import Retro from "./Soundbites/retro.js";
import Synth from "./Soundbites/synth.js"
class Landingpage extends Component {
    render() {
    return(
     <div id="landingpagewrap">
         <div id="landingpageinnerwrap">

     <h2 id="cyve">Choose your viewing experience</h2>
     <div className="mobilewrap">
<Mobile></Mobile>
</div>
<Synth></Synth>
<Modern></Modern>
<Classic></Classic>
<Retro></Retro>
     </div>
     </div>
    )
}
}

export default Landingpage
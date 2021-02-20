import React, { Component } from 'react';
import "./App.css";
import Mobile from "../Soundbites/mobile.js";
import Modern from "../Soundbites/modern.js";
import Retro from "../Soundbites/retro.js";
import Synth from "../Soundbites/synth.js"
class Classic extends Component {
    render() {
    return(
     <div id="landingpagewrap">
         <div id="landingpageinnerwrap">

     <h2 id="cyve">Choose your viewing experience</h2>
     <div id="buttonwrap">
     <div className="mobilewrap">
<Mobile></Mobile>
</div>
<Synth></Synth>
<div id="modern">
<Modern></Modern>
</div>
<Retro></Retro>
     </div>
     </div>
            {/* <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">About Me</Link> */}
     </div>
     
    )
}
}

export default Classic
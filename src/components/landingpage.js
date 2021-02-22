import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import Classic from "./Soundbites/classic.js";
import Mobile from "./Soundbites/mobile.js";
import Modern from "./Soundbites/modern.js";
import Retro from "./Soundbites/retro.js";
import Synth from "./Soundbites/synth.js"
import {  Header, Navigation } from 'react-mdl';
class Landingpage extends Component {
    render() {
    return(
        
     <div id="landingpagewrap">
               <div className="headercss">
        <Header title="Richard B. Hall">
            <Navigation id="navbarwrap">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">About Me</Link>
            </Navigation>
        </Header>
        </div>
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
<Link to="/homeclassicview"> <Classic></Classic> </Link>
<Retro></Retro>
     </div>
     </div>
     </div>
    )
}
}

export default Landingpage
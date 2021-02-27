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
               <div id="headercss">
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
     <Link to="/homemobileview"><Mobile></Mobile></Link>
</div>
<Link to="/homesynthview"><Synth></Synth></Link>

<div id="modern">
<Link to="/homemodernview"><Modern></Modern></Link>

</div>
<Link to="/homeclassicview"><Classic></Classic></Link>
<Link to="/homeretroview"><Retro></Retro></Link>
     </div>
     </div>
     </div>
    )
}
}

export default Landingpage
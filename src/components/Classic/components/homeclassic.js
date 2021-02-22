import React, { Component } from 'react';
import "../App.css";
import Classic from "../../Soundbites/classic";
import Mobile from "../../Soundbites/mobile.js";
import Modern from "../../Soundbites/modern.js";
import Retro from "../../Soundbites/retro.js";
import Synth from "../../Soundbites/synth.js";
import { Link } from 'react-router-dom';
class HomeClassic extends Component {
    render() {
    return(
        <div id="megawrap">
     <div id="landingpagewrap">
         <div id="lpiwclassic">
             <h1 id="hearth"><Link class="links" to="/">Home</Link></h1>
             <h3 id="resumeclassic" class="linksclassic"><Link class="links" to="/">Resume</Link></h3>
             <h3 id="projectsclassic" class="linksclassic"><Link class="links" to="/">Projects</Link></h3>
             <h3 id="contactclassic" class="linksclassic"><Link class="links" to="/">Contacts</Link></h3>
             <h3 id="aboutmeclassic" class="linksclassic"><Link class="links" to="/">About Me</Link></h3>

     <h2 id="cyveclassic">Choose your viewing experience</h2>
     <div id="buttonwrap">
     <div className="mobilewrap">
<Mobile></Mobile>
</div>
<Synth></Synth>
<div id="modern">
<Modern></Modern>
</div>
<Classic></Classic>
<Retro></Retro>
     </div>
     </div>
     </div>
     </div>
    )
}
}

export default HomeClassic
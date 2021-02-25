import React, { Component } from 'react';
import "../App.css";
import retro from "../../Soundbites/retro";
import Mobile from "../../Soundbites/mobile.js";
import Modern from "../../Soundbites/modern.js";
import Retro from "../../Soundbites/retro.js";
import Synth from "../../Soundbites/synth.js";
import { Link } from 'react-router-dom';

class Homeretro extends Component {
    render() {
    return(
        <div id="megawrapretro">
     <div id="landingpagewrap">
         <div id="lpiwretro">
         Richard B. Hall
             <div id="lpiwretroinner">
             </div>
</div>
<div id="webbarout">
    <div id="webbarin">
             <p id="homeretro" class="linksretro"><Link class="links" id="homeretro" to="/"></Link></p>
             <p id="resumeretro" class="linksretro"><Link class="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" class="linksretro"><Link class="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" class="linksretro"><Link class="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" class="linksretro"><Link class="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>
     <h2 id="cyveretro">Choose your viewing experience</h2>
     <div id="buttonwrap">
     <div className="mobilewrap">
<Mobile></Mobile>
</div>
<Synth></Synth>
<div id="modern">
<Modern></Modern>
</div>
<retro></retro>
<Retro></Retro>
     </div>
     </div>
     </div>

    )
}
}

export default Homeretro
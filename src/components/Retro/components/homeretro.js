import React, { Component } from 'react';
import "../App.css";
import Classic from "../../Soundbites/classic";
import Mobile from "../../Soundbites/mobile.js";
import Modern from "../../Soundbites/modern.js";
import Retro from "../../Soundbites/retro.js";
import Synth from "../../Soundbites/synth.js";
import { Link } from 'react-router-dom';

class HomeRetro extends Component {
    render() {
    return(
        <div id="megawrapretro">
     <div id="landingpagewrapretro">
         <div id="lpiwretro">
         Richard B. Hall
             <div id="lpiwretroinner">
             </div>
</div>
<div id="webbaroutretro">
    <div id="webbarinretro">
             <p id="homeclassic" class="linksclassic"><Link class="links" id="homeclassic" to="/"></Link></p>
             <p id="resumeretro" class="linksretro"><Link class="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" class="linksretro"><Link class="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" class="linksretro"><Link class="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" class="linksretro"><Link class="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>
     <h2 id="cyveretro">Choose your viewing experience</h2>
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

export default HomeRetro
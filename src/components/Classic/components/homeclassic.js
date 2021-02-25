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
        <div id="megawrapclassic">
     <div id="landingpagewrap">
         <div id="lpiwclassic">
         Richard B. Hall
             <div id="lpiwclassicinner">
             </div>
</div>
<div id="webbarout">
    <div id="webbarin">
             <p id="homeclassic" class="linksclassic"><Link class="links" id="homeclassic" to="/"></Link></p>
             <p id="resumeclassic" class="linksclassic"><Link class="links" id="resumeclassic" to="/resumeclassicview"></Link></p>
             <p id="projectsclassic" class="linksclassic"><Link class="links" id="projectsclassic" to="/projectsclassicview"></Link></p>
             <p id="contactclassic" class="linksclassic"><Link class="links" id="contactclassic" to="/contactclassicview"></Link></p>
             <p id="aboutmeclassic" class="linksclassic"><Link class="links" id="aboutmeclassic" to="/aboutmeclassicview"></Link></p>
             </div>
</div>
     <h2 id="cyveclassic">Choose your viewing experience</h2>
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

export default HomeClassic
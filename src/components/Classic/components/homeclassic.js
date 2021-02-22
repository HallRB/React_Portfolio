import React, { Component } from 'react';
import "../App.css";
import Classic from "../../Soundbites/classic";
import Mobile from "../../Soundbites/mobile.js";
import Modern from "../../Soundbites/modern.js";
import Retro from "../../Soundbites/retro.js";
import Synth from "../../Soundbites/synth.js";
import { Link } from 'react-router-dom';
import Home from "../../Assetts/homeicon.png";
import Resume from "../../Assetts/resumeicon.png";
import Portfolio from "../../Assetts/portfolioicon.png";
import Contact from "../../Assetts/contacticon.png";
import AboutMe from "../../Assetts/aboutmeicon.png";
class HomeClassic extends Component {
    render() {
    return(
        <div id="megawrapclassic">
     <div id="landingpagewrap">
         <div id="lpiwclassic">
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

    )
}
}

export default HomeClassic
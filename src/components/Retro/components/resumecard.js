import React, { Component } from 'react';
import Resumeimg from './Assetts/resume.png';
import { Link } from 'react-router-dom';
import "./resume.css";
import "../App.css";

class Resumecard extends Component {
    render() {
        return(
            <div id="allwrap">
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
<div className="resumecontainerretro">
<img className="resumingretro" alt="resume" src={Resumeimg} />
</div>
</div>
        )
    }
}
export default Resumecard
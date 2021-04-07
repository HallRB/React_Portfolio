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
<div id="webbaroutretro">
    <div id="webbarinretro">
    <p id="homeretro" className="linksretro"><Link className="links" id="homeretro" to="/"></Link></p>
             <p id="resumeretro" className="linksretro"><Link className="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" className="linksretro"><Link className="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" className="linksretro"><Link className="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" className="linksretro"><Link className="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>
<div className="resumecontainerretro">
    <p>
    </p>    
<img className="resumingretro" alt="resume" src={Resumeimg} />
</div>
</div>
        )
    }
}
export default Resumecard
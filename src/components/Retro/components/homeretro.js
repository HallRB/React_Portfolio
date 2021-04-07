import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import ThemeCard from "../../Themes/themecard";

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
             <p id="homeretro" className="linksretro"><Link className="links" id="homeretro" to="/"></Link></p>
             <p id="resumeretro" className="linksretro"><Link className="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" className="linksretro"><Link className="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" className="linksretro"><Link className="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" className="linksretro"><Link className="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>
     <h2 id="cyveretro">Choose your viewing experience</h2>
<ThemeCard></ThemeCard>
     </div>
     </div>

    )
}
}

export default HomeRetro
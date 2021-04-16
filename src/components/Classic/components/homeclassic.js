import React, { Component } from 'react';
import "../App.css";
import ThemeCard from "../../Themes/themecard";
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
<div id="webbaroutclassic">
    <div id="webbarinclassic">
             <p id="homeclassic" className="linksclassic"><Link className="links" id="homeclassic" to="/"></Link></p>
             <p id="resumeclassic" className="linksclassic"><Link className="links" id="resumeclassic" to="/resumeclassicview"></Link></p>
             <p id="projectsclassic" className="linksclassic"><Link className="links" id="projectsclassic" to="/projectsclassicview"></Link></p>
             <p id="contactclassic" className="linksclassic"><Link className="links" id="contactclassic" to="/contactclassicview"></Link></p>
             <p id="aboutmeclassic" className="linksclassic"><Link className="links" id="aboutmeclassic" to="/aboutmeclassicview"></Link></p>
             </div>
</div>
<h2 id="cyveclassic">Choose your viewing experience</h2>
     <ThemeCard></ThemeCard>
     </div>
        </div>
    )
}
}

export default HomeClassic
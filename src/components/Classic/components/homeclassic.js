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
     <ThemeCard></ThemeCard>
     </div>
        </div>
    )
}
}

export default HomeClassic
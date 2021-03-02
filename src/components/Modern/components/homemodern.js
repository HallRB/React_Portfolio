import React, { Component } from 'react';
import "../App.css";
import ThemeCard from "../../Themes/themecard";
import { Link } from 'react-router-dom';

class HomeModern extends Component {
    render() {
    return(
        <div id="megawrapmodern">
     <div id="landingpagewrapmodern">
         <div id="lpiwmodernmodern">
         Richard B. Hall
             <div id="lpiwmoderninnermodern">
             </div>
</div>
<div id="webbarout">
    <div id="webbarin">
             <p id="homemodern" class="linksmodern"><Link class="links" id="homemodern" to="/"></Link></p>
             <p id="resumemodern" class="linksmodern"><Link class="links" id="resumemodern" to="/resumemodernview"></Link></p>
             <p id="projectsmodern" class="linksmodern"><Link class="links" id="projectsmodern" to="/projectsmodernview"></Link></p>
             <p id="contactmodern" class="linksmodern"><Link class="links" id="contactmodern" to="/contactmodernview"></Link></p>
             <p id="aboutmemodern" class="linksmodern"><Link class="links" id="aboutmemodern" to="/aboutmemodernview"></Link></p>
             </div>
</div>
<h2 id="cyvemodern">Choose your viewing experience</h2>
     <ThemeCard></ThemeCard>
     </div>
        </div>
    )
}
}
export default HomeModern
import React, { Component } from 'react';
import "./contact.css";
import "../App.css";
import { Link } from 'react-router-dom';


class Contact extends Component {

    render() {
        
        return(
            <div id="megawrapretro">
                <div id="lpiwretro">
         Richard B. Hall
             <div id="lpiwretroinner">
             </div>
</div>
<div id="webbaroutretro">
    <div id="webbarinretro">
             <p id="homeretro" class="linksretro"><Link class="links" id="homeretro" to="/"></Link></p>
             <p id="resumeretro" class="linksretro"><Link class="links" id="resumeretro" to="/resumeretroview"></Link></p>
             <p id="projectsretro" class="linksretro"><Link class="links" id="projectsretro" to="/projectsretroview"></Link></p>
             <p id="contactretro" class="linksretro"><Link class="links" id="contactretro" to="/contactretroview"></Link></p>
             <p id="aboutmeretro" class="linksretro"><Link class="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
             </div>
</div>

<div className="contactwrap" id="contactwrapretro">
    <h1>Contact Me</h1>
    <h2>Phone: 210-800-3046</h2>
    <h2>Email: Richardbrianhall@gmail.com</h2>
    <h2>Github: https://Github.com/HallRB</h2>
    <h2>LinkedIn: https://LinkedIn.com/in/hallrb</h2>
</div>

          </div>
)
}
}
export default Contact
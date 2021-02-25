import React, { Component } from 'react';
import "./aboutme.css";
import Biocardretro from "./AboutMe/bio.js"
import "../App.css";
import { Link } from 'react-router-dom';
class AboutMe extends Component {
     
      render() {
        return (
          <div id="megawrapretro">
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
 
          <Biocardretro></Biocardretro>
          </div>
        )
      }
    }
export default AboutMe





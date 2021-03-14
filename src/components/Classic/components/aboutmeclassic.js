import React, { Component } from 'react';
import "./aboutme.css";
import Biocardclassic from "./AboutMe/bio.js"
import "../App.css";
import Skills from "../../Assetts/skilljavascriptimg.jpg"
import { Link } from 'react-router-dom';
class AboutMe extends Component {
     
      render() {
        return (
          <div id="megawrapclassic">
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
 
          <Biocardclassic></Biocardclassic>

          <Skills></Skills>
          </div>
        )
      }
    }
export default AboutMe





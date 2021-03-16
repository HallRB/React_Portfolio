import React, { Component } from 'react';
import "./aboutme.css";
import Biocardclassic from "./AboutMe/bio.js"
import "../App.css";
import { Link } from 'react-router-dom';
import { CardTitle } from 'react-mdl';
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
 
 <div id="gridwrapmain">
            <div id="skillsmainwrapclassic">
              <div id="skillsmainclassic">


              <div id="skillblock">
              <div style={{height: '150px'}}><img alt="" id="skilljs"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillcss"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillexpress"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillbootstrap"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillgitbash"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillgithub"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillheroku"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillpostman"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillreact"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillnode"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillmysql"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillmongodb"></img></div>
              <div style={{height: '150px'}}><img alt="" id="skillvscode"></img></div>
              </div>


                <h2>Skills</h2>
              </div>
            </div>
          <Biocardclassic></Biocardclassic>
          <div id="certificatewrapmain">
              <div id="certificatemain">
                
              </div>
            </div>
            <div id="filler">

            </div>
            </div>

         </div>
        )
      }
    }
export default AboutMe





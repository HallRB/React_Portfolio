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
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
              <CardTitle style={{height: '100px'}}><img alt="" id="skilljs"></img></CardTitle>
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





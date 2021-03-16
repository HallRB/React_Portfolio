import React, { Component } from 'react';
import "./aboutme.css";
import Biocardretro from "./AboutMe/bio.js"
import "../App.css";
import { CardTitle } from 'react-mdl';
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
 <div id="webbaroutretro">
     <div id="webbarinretro">
              <p id="homeretro" class="linksretro"><Link class="links" id="homeretro" to="/"></Link></p>
              <p id="resumeretro" class="linksretro"><Link class="links" id="resumeretro" to="/resumeretroview"></Link></p>
              <p id="projectsretro" class="linksretro"><Link class="links" id="projectsretro" to="/projectsretroview"></Link></p>
              <p id="contactretro" class="linksretro"><Link class="links" id="contactretro" to="/contactretroview"></Link></p>
              <p id="aboutmeretro" class="linksretro"><Link class="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
              </div>
 </div>
<div id="filler">.</div>
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
          <Biocardretro></Biocardretro>
          <div id="certificatewrapmain">
              <div id="certificatemain">
                
              </div>
            </div>
          </div>
          </div>
        )
      }
    }
export default AboutMe





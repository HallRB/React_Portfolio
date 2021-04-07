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
 <div id="webbaroutretro">
     <div id="webbarinretro">
              <p id="homeretro" className="linksretro"><Link className="links" id="homeretro" to="/"></Link></p>
              <p id="resumeretro" className="linksretro"><Link className="links" id="resumeretro" to="/resumeretroview"></Link></p>
              <p id="projectsretro" className="linksretro"><Link className="links" id="projectsretro" to="/projectsretroview"></Link></p>
              <p id="contactretro" className="linksretro"><Link className="links" id="contactretro" to="/contactretroview"></Link></p>
              <p id="aboutmeretro" className="linksretro"><Link className="links" id="aboutmeretro" to="/aboutmeretroview"></Link></p>
              </div>
 </div>
<div id="filler">.</div>
 <div id="gridwrapmain">
            <div id="skillsmainwrapclassic">
              <div id="skillsmainclassic">
              <div id="skillblock">
              <div style={{height: '150px'}}><img alt="" id="skillhtml"></img></div>
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
              <div style={{height: '150px'}}><img alt="" id="skillwp"></img></div>
              </div>

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





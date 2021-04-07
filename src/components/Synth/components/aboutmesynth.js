import React, { Component } from 'react';
import "./aboutmesynth.css";
import Biocard from "./AboutMe/bio.js"
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
class AboutMe extends Component {
     
      render() {
        return (
          <div id="landingpagewrapsynth">                               
            <div className="headercss">
            <Header title="Richard B. Hall">
                <Navigation id="navbarwrap">
                <Link to="/homesynthview">Home</Link>
                <Link to="/resumesynthview">Resume</Link>
                <Link to="/projectssynthview">Projects</Link>
                <Link to="/contactsynthview">Contact</Link>
                <Link to="/aboutmesynthview">About Me</Link>
                </Navigation>
            </Header>
            </div>
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
          <Biocard></Biocard>
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


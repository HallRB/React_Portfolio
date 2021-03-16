import React, { Component } from 'react';
import "./aboutmesynth.css";
import Biocard from "./AboutMe/bio.js"
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import { CardTitle } from 'react-mdl';
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


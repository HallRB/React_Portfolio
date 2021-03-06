import React, { Component } from 'react';
import "./aboutme.css";
import Biocard from "./AboutMe/bio.js"
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import { CardTitle } from 'react-mdl';
class AboutMe extends Component {
     
      render() {
        return (
          <div id="allwrapmain">                               
            <div className="headercss">
            <Header title="Richard B. Hall">
                <Navigation id="navbarwrap">
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/aboutme">About Me</Link>
                </Navigation>
            </Header>
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
          <Biocard></Biocard>
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


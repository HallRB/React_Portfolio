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
            <div id="filler">

            </div>
            </div>
          </div>
        )
      }
    }
export default AboutMe


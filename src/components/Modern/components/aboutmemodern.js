import React, { Component } from 'react';
import "./aboutmemodern.css";
import Biocard from "./AboutMe/bio.js"
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
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
            <div id="skillsmainwrap">
              <div id="skillsmain">
                <h2>Skills</h2>
              </div>
            </div>
          <Biocard></Biocard>
          <div id="certificatewrapmainmodern">
              <div id="certificatemainmodern">
                
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


import React, { Component } from 'react';
import "./aboutme.css";
import Biocard from "./AboutMe/bio.js"
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
class AboutMe extends Component {
     
      render() {
        return (
          <div id="allwrap">                               
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
          <Biocard></Biocard>
          </div>
        )
      }
    }
export default AboutMe


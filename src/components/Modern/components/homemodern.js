import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import {  Header, Navigation } from 'react-mdl';
import Resume from "./resumemodern";
import ThemeCard from "./Themes/themecard";
import Biocard from "./AboutMe/bio.js"

class HomeModern extends Component {
    render() {
    return(
        
     <div id="megawrapmodern">
               <div id="headercss">
        <Header title="Richard B. Hall">
            <Navigation id="navbarwrapmainmodern">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">About Me</Link>
            </Navigation>
        </Header>
        </div>
         <div id="lpiwmoderninner">

<ThemeCard></ThemeCard>

<div id="aboutmemodernimp">
    <Biocard></Biocard>
</div>
<p></p>
<div id="skillsmainwrapmodern">
              <div id="skillsmainmodern">
                <h2>Skills</h2>
              </div>
            </div>
            <p></p>
<div id="resumemodernimp">
<Resume></Resume>
</div>


</div>
     </div>
    )
}
}

export default HomeModern
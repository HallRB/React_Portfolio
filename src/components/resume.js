import React, { Component } from 'react';
import Resumecard from "./resumecard";
// import Resumefile from "./Assetts/ResumeRichardBHall.pdf";
import "./resume.css";
import {  Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import "../App.css";
class Resume extends Component {
    render() {
    return(
        
        <div id="resumecardmain">
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
<Resumecard></Resumecard>
{/* <div id="download"><Resumefile></Resumefile></div> */}
</div>
    )
}
}
export default Resume
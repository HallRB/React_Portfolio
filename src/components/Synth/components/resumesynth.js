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
        
        <div id="landingpagewrapsynth">
                           <div className="headercss">
        <Header title="Richard B. Hall">
            <Navigation id="navbarwrap">
                <Link to="/">Home</Link>
                <Link to="/resumesynthview">Resume</Link>
                <Link to="/projectssynthview">Projects</Link>
                <Link to="/contactsynthview">Contact</Link>
                <Link to="/aboutmesynthview">About Me</Link>
            </Navigation>
        </Header>
        </div>
        <div id="downloadresume"><button id="downloadbutton">Download</button></div>
<Resumecard></Resumecard>
{/* <div id="download"><Resumefile></Resumefile></div> */}
</div>
    )
}
}
export default Resume
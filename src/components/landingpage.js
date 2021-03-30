import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import {  Header, Navigation } from 'react-mdl';
import ThemeCard from "./Themes/themecard";

class Landingpage extends Component {
    render() {
    return(
        
     <div id="landingpagewrap">
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
         <div id="landingpageinnerwrapdefault">

     <h2 id="cyvedefault">Choose your viewing experience</h2>
     <ThemeCard></ThemeCard>
     
{/* <Test></Test> */}

</div>
     </div>
    )
}
}

export default Landingpage
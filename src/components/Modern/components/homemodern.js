import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import {  Header, Navigation } from 'react-mdl';
import ThemeCard from "../../Themes/themecard";
class HomeModern extends Component {
    render() {
    return(
        
     <div id="landingpagewrap">
               <div id="headercss">
        <Header title="Richard B. Hall">
            <Navigation id="navbarwrapmain">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">About Me</Link>
            </Navigation>
        </Header>
        </div>
         <div id="landingpageinnerwrap">

     <h2 id="cyve">Choose your viewing experience</h2>
     <ThemeCard></ThemeCard>
     

</div>
     </div>
    )
}
}

export default HomeModern
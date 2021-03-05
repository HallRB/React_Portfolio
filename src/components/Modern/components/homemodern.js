import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import {  Header, Navigation } from 'react-mdl';
import ThemeCardClassic from "../../Themes/themeclassic";
import ThemeCardSynth from "../../Themes/themesynth";
import ThemeCardMobile from "../../Themes/thememobile";
import ThemeCardRetro from "../../Themes/themeretro";
import ThemeCardModern from "../../Themes/thememodern";
class HomeModern extends Component {
    render() {
    return(
        
     <div id="megawrapmodern">
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
         <div id="lpiwmoderninner">

     <h2 id="cyve">Choose your viewing experience</h2>
     <ThemeCardClassic></ThemeCardClassic>
     <ThemeCardSynth></ThemeCardSynth>
     <ThemeCardMobile></ThemeCardMobile>
     <ThemeCardRetro></ThemeCardRetro>
     <ThemeCardModern></ThemeCardModern>
     

</div>
     </div>
    )
}
}

export default HomeModern
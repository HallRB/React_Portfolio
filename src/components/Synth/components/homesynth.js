import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import ThemeCard from "../../Themes/themecard";
import {  Header, Navigation } from 'react-mdl';
class HomeSynth extends Component {
    render() {
    return(
        
     <div id="landingpagewrapsynth">
               <div id="headercsssynth">
        <Header title="Richard B. Hall">
            <Navigation id="navbarwrapsynth">
                <Link to="/homesynthview">Home</Link>
                <Link to="/resumesynthview">Resume</Link>
                <Link to="/projectssynthview">Projects</Link>
                <Link to="/contactsynthview">Contact</Link>
                <Link to="/aboutmesynthview">About Me</Link>
            </Navigation>
        </Header>
        </div>


        <h2 id="cyvesynth">Choose your viewing experience</h2>
     <ThemeCard></ThemeCard>
     </div>
    )
}
}

export default HomeSynth
import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import Classic from "../../Soundbites/classic.js";
import Mobile from "../../Soundbites/mobile.js";
import Modern from "../../Soundbites/modern.js";
import Retro from "../../Soundbites/retro.js";
import Synth from "../../Soundbites/synth.js"
import {  Header, Navigation } from 'react-mdl';
class HomeSynth extends Component {
    render() {
    return(
        
     <div id="landingpagewrapsynth">
               <div className="headercsssynth">
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


         <div id="landingpageinnerwrapsynth">
         <p>Choose your viewing experience</p>
            <div id="buttonwrapsynth">
                <div className="colexp" id="colexp1">
                    <div className="exprow" id="exprow1">
                         <Link to="/homesynthview"> <Synth></Synth> </Link>
                    </div>
                    <div className="exprow" id="exprow2">
                         <div id="modern"><Modern></Modern></div>
                    </div>
                </div>
                
                <div className="colexp" id="colexp2">
                <div className="mobilewrap"><Mobile></Mobile></div>
                </div>
                
                <div className="colexp" id="colexp3">
                    <div className="exprow" id="exprow3">
                        <Link to="/homeclassicview"> <Classic></Classic> </Link>
                    </div>
                
                    <div className="exprow" id="exprow4">
                        <Link to="/homeretroview"><Retro></Retro></Link>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
}

export default HomeSynth
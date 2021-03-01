import React, { Component } from 'react';
import "./theme.css";
import { Link } from 'react-router-dom';
import Classic from "../Soundbites/classic.js";
import Mobile from "../Soundbites/mobile.js";
import Modern from "../Soundbites/modern.js";
import Retro from "../Soundbites/retro.js";
import Synth from "../Soundbites/synth.js"

class ThemeCard extends Component {
     
      render() {
        return (
          <div id="allwrap">                               
            
            
            {/* cardwrap */}
            <div id="themecardwrap">
                On top outer
                <div id="innerthemecardwrap">On top inner
                <div><img alt="" id="themepic"></img></div>
                    <div id="themebutton">THEMEBUTTON</div>
                                            On bottom inner
                </div>
            On bottom outer
            </div>
          </div>
        )
      }
    }
export default ThemeCard

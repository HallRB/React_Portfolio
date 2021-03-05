import React, { Component } from 'react';
import "./theme.css";
import Synth from "../../../Soundbites/synth.js"
import { Link } from 'react-router-dom';
class ThemeCardSynth extends Component {
     
      render() {
        return (
          <div id="allwrapmoderntheme">                               

            <div id="themecardwrap">

                <div id="innerthemecardwrap">
                <div><img alt="" id="themepicsynth"></img></div>
                    <div id="themebutton"><Link to="/homesynthview"><Synth></Synth></Link></div>
                </div>
            </div>

   
          </div>
        )
      }
    }
export default ThemeCardSynth

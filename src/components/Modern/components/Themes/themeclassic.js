import React, { Component } from 'react';
import "./theme.css";
import Classic from "../../../Soundbites/classic.js";
import { Link } from 'react-router-dom';

class ThemeCardClassic extends Component {
    render() {
        return (
          <div id="allwrapmoderntheme">                               
            
            
            {/* cardwrap */}
            <div id="themecardwrap">
                <div id="innerthemecardwrap">
                <div><img alt="" id="themepicclassic"></img></div>
                    <div id="themebutton"><Link to="/homeclassicview"><Classic></Classic></Link></div>
                </div>
            </div>

          </div>
        )
      }
    }
export default ThemeCardClassic

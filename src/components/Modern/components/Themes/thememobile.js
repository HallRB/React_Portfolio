import React, { Component } from 'react';
import "./theme.css";
import Mobile from "../../../Soundbites/mobile.js";
import { Link } from 'react-router-dom';

class ThemeCardMobile extends Component {
     
      render() {
        return (
          <div id="allwrapmoderntheme">                               
            
            <div id="themecardwrap">
                <div id="innerthemecardwrap">
                    <div id="themebutton">     <Link to="/homemobileview"><Mobile></Mobile></Link></div>
                </div>
            </div>
         </div>
        )
      }
    }
export default ThemeCardMobile
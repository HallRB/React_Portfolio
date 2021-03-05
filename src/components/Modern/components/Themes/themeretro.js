import React, { Component } from 'react';
import "./theme.css";
import { Link } from 'react-router-dom';
import Retro from "../../../Soundbites/retro.js";


class ThemeCardRetro extends Component {
     
      render() {
        return (
          <div id="allwrap">                               

            <div id="themecardwrap">
                <div id="innerthemecardwrap">
                <div><img alt="" id="themepicretro"></img></div>
                    <div id="themebutton"><Link to="/homeretroview"><Retro></Retro></Link></div>
                </div>
            </div>

          </div>
        )
      }
    }
export default ThemeCardRetro

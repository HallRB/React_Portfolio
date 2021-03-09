import React, { Component } from 'react';
import "./theme.css";
import Modern from "../Soundbites/modern.js";
import { Link } from 'react-router-dom';

class ThemeCardModern extends Component {
     
      render() {
        return (
          <div id="allwrap">                               
            
        
            <div id="themecardwrap">
                <div id="innerthemecardwrap">
                <div><img alt="" id="themepicmodern"></img></div>
                    <div id="themebutton"><Link to="/homemodernview"><Modern></Modern></Link></div>
                </div>
            </div>
          </div>
        )
      }
    }
export default ThemeCardModern

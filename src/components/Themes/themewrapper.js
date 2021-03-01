import React, { Component } from 'react';
import "./theme.css";
import { Link } from 'react-router-dom';

class ThemeWrapper extends Component {
     
      render() {
        return (
          <div id="wrapperwrapper">                               
            
            
            {/* cardwrap */}
            <div id="themewrapperwrap">
                On top outer
                <div id="innerthemewrapperwrap">On top inner
                    <div id="themepic">THEMEPIC</div>
                    <div id="themebutton">THEMEBUTTON</div>
                                            On bottom inner
                </div>
            On bottom outer
            </div>
          </div>
        )
      }
    }
export default ThemeWrapper

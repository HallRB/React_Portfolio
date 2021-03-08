import React, { Component } from 'react';
import "./theme.css";
import ThemeCardClassic from './themeclassic';
import ThemeCardMobile from './thememobile';
import ThemeCardSynth from './themesynth';
import ThemeCardRetro from './themeretro';
import ThemeCardModern from './thememodern';

class ThemeCard extends Component {
     
      render() {
        return (
          <div id="allwrapmodernthemeouter">                               
            <div id="themeblock">
              
            <ThemeCardClassic></ThemeCardClassic>
            </div>
            <div id="themeblockmodern">
            <ThemeCardSynth></ThemeCardSynth>
            </div>
            <div id="themeblockmodern">
            <ThemeCardMobile></ThemeCardMobile>
            </div>
            <div id="themeblockmodern">
            <ThemeCardRetro></ThemeCardRetro>
            </div>
            <div id="themeblockmodern">
            <ThemeCardModern></ThemeCardModern>
            </div>


          </div>
        )
      }
    }
export default ThemeCard

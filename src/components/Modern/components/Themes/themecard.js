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
          <div id="themecardallwrap">                               
            <div class="themeblock">
            <ThemeCardClassic></ThemeCardClassic>
            </div>
            <div class="themeblock">
            <ThemeCardSynth></ThemeCardSynth>
            </div>
            <div class="themeblock">
            <ThemeCardMobile></ThemeCardMobile>
            </div>
            <div class="themeblock">
            <ThemeCardRetro></ThemeCardRetro>
            </div>
            <div class="themeblock">
            <ThemeCardModern></ThemeCardModern>
            </div>


          </div>
        )
      }
    }
export default ThemeCard

import React, { Component } from 'react';
import "../aboutme.css";

class Biocard extends Component {
    render() {
        return(
            <div className="aboutmewrap">
            <p></p>
            <h1 id="abtme">Biography</h1>
            <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div id="headshot" alt="Avatar">
              </div>
              <div className="flip-card-back backside">
                <h2>Richard B. Hall</h2> 
                <p id="para">Richard grew up in Texas during the dawn of the internet age. As a child he spent much time playing 32-bit games on the family's Windows 95 PC. In 6th grade he made his first website and worked to build a PC as part of a collaborative project with his schoolmates. He made personal use of Wordpress and Myspace as they arrived at that time. His particularly enjoyed designing personal layouts by playing with colors, fonts, and music. In High School Richard became a competitive online gamer. In college his focus turned towards the arts including acting, singing, playwriting, and painting. He graduated from the University of Maryland in 4 years, earning two degrees with a 3.4 gpa and 152 credit hours. He received a BA in Theatre and a BA in Classical Languages. After graduation, he moved back to Texas to Austin where he worked in administration for the state, pursuing artistic endeavors in his spare time. After 2 years he found a new opportunity of employment with a concrete manufacturer where, outside of the IT department, he was the only person in their local branch familiar with computers. This challenged him to master the use of various software where his technical skills served multiple departments. In 2020 like many, Richard was part of a mass layoff along with 11K+ other employees. Deciding to find a new career path, Richard combined his linguistic, artistic, and technical skills to become a fledgling, full-stack, web-developer in 2021 after graduating from Trilogy Education's Coding Bootcamp through the University of Texas at Austin.</p>
              </div>
            </div>
          </div>
          </div>
          </div>
        )
    }
}
export default Biocard